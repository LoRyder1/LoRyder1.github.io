# Resque and Sidekiq

**Background Jobs with Resque**
When building websites, it's important to keep your response times down. Long-running requests tie up server resources, degrade user perception of your site, and make it hard to manage failures

Solution: return a successful response, and then schedule some computation to happen later, outside the original request/response cycle. 

**Do you need a job queue?**

How do you identify areas of the application that can benefit from a background job? Some common areas for asynchronous work:

  1. Data processing - generating thumbnails or resizing images
  2. 3rd Party APIs - interacting with a service outside of your site
  3. Maintenance - expiring old sessions, sweeping caches
  4. Email - a request that causes an email to be sent

Applications with good OO design make it easy to sen jobs to workers, poor OO makes it hard to extract jobs since responsibilities tend to overlap.

While there are various solutions to provide a background job, we'll focus on using Resque, the most widely deployed queuing library. 

**Setting up Resque**

Setup Redis
Create a fake delay
Writing a Job
A Resque job is any Ruby class or module with a perform class method. 

Resque can maintain multiple queues for different job types. By setting the @queue class instance variable, this worker will only look for jobs on the :sleep queue

**Queueing a Job**

Queuing a job in Resque looks like this: 
  `Resque.enqueue(Sleeper, 5)`

The parameters will be serialized as JSON and appended onto the REdis queue specified in the job class. The above class would be added to the sleep queue with the following JSON:

Jobs should only need to access your models. If you're tempted to trigger a controller action, it's a sign that the controller action is holding domain logic which needs to be pushed down to the model.

When a job is created it gets appended to a list data structure in Redis. A Resque worker will then try to process the job. 

**Monitoring the Resque Queue**

Resque provides a Sintra application as a web interface to monitor the status of your queues & workers and to view statistics of the instance

  *workers*
  the workers tab shows a list of all workers and their status. clicking on a worker shows the details of the worker including the host, pid, when it was started, how many jobs its processed, and how many failures it has encountered
  *stats*
  the stats tab displays overall stats of the Resque isntance as well as a listing of all the keys in Redis. Clicking on the keys will show the value of the key, so this provides a nice quick way to look inside Redis without having to connect and fire up the command line client

** Starting up the Workers**

Resque provides rake tasks to start one or many workers. Add require 'resque/tasks' in the top of your Rakefile. Then you'll see them added to your available tasks:

You can control these tasks with environment variables:
  - queue controls which queue will be monitored
  - count set the number of workers (only with resque:workers)

**Why Use a Job**

The total_word_count methods on Article and Comment are each implemented as such:

The result is that each viewing of the dashboard causes a calculation involving each comment or article to be rerun. This is the sort of potentially slow operation that should A) be cached, and B) be calculated in the background. Introducing a Resque job into our application will make this change relatively simple and straightforward to implement. 

# Sidekiq

**Background Processing**

**Writing Your First Background Worker**

Background workers are necessary for almost all projects, and for some applications, background code can be just as important as the web facing code. 

**Setting up Sidekiq**

Sidekiq is a background processing library for Ruby. It adds some handy methods to our classes which make background processing quite simple.

Sidekiq relies on Redis(a key-value store) to maintain a job queue. That's the first thing you'll need to install.

**The types of Background Workers**

Generally, your workers will be running under one of the following conditions:
  1. Immediately after an action is performed
  2. A certain amount of time after an aciton is performed
  3. Regularly, at set intervals

**Running a worker immediately after an action is performed**

Sometimes the user will perform an action on our application that takes a considerable amount of time to complete. Some examples of this might be email, image processing, code highlighting. We don't want the user to sit there waiting for this aciton to complete, so we send it off to a background worker. 

Sending email is probably the most common example. 
Run a time consuming class method call on an ActiveRecord object in a background worker

**Running a worker a set amount of time after an action is performed**

Delaying a worker by a set interval is quite similar to simply backgrounding it. 

**Running a worker regularly, at set intervals**

Sometimes, you'll want to set up a scheduled task to perform an action at a regular interval.

Let's say, for example, you have a user registration process. If someone starts the registration, but doesn't complete it, you may want to sent them a reminder email. 

**Big Summary**

Sidekiq is a full-featured background processing framework for Ruby. It aims to be simple to integrate with any modern Rails application and much higher performance than other existing solutions.

**Basics**

Sidekiq is a framework for background job processing. It allows you to scale your application by performing work in the background. This requires three parts:

  *Client*
  The Sidekiq client runs in your web application process (typically a pum or passenger process) and allows you to create jobs for processing later. There are two ways to create a job in your application code: 

  `MyWorker.perform_async(1,2,3)`
  `Sidekiq::Client.push('class' => MyWorker, 'args' => [1,2,3]) `#Lower-level generic API

  These two methods are quivalent and create a Hash which represents the job, serializes that Hash to JSON stirng and pushes that String into a queue in Redis. This means the arguments to your worker must be simple JSON datatypes (numbers, strings, boolean, array, hash). Complex Ruby objects (e.g. Date, Time, ActiveRecord models) will not serialize properly.

  *Redis*
  Redis provides data storage for Sidekiq. It holds all the job data along with runtime and historical data to power Sidekiq's Web UI.

  *Server*
  Each Sidekiq server process pulls jobs from the queue in Redis and processing them. Like your web processes, Sidekiq boots Rails so your jobs and workers have the full Rails API, including Active Record, available for use. The server will instantiate the worker and call `perform` with the given arguments. Everything else is up to your code. 

**Best Practices**

1. Make you job parameters small and simple

Don't save state to Sidekiq, save simple identifiers. Look up the objects once you actually need tem in your perform method
`SomeWorker.perform_async(quote_id)`

The arguemnts you pass to `perform_async` must be composed of simple JSON datatypes: string, integer, float, boolean, null, array and hash. 

2. Make your job idempotent and transactional

Idempotency means that your job can safely execute multiple times. For instance, with the error retry functionality, your job might be half-processed, throw an error, and then be re-executed over and over until it successfully completes. 

3. Embrace Concurrency

Sidekiq is designed for parallel execution so design your jobs so you can run lots of them in parallel. It has basic features for tuning concurrency (e.g. targeting a sidekiq process at a queue with a defined number of threads) but your system architecture is much simpler if you don't have such specialization

You can use a connection pool to limit the overall number of connections to a resource-limited server if your Sidekiq processes are overwhelming it with traffic.

**Using Redis**

Sidekiq uses Redis to store all of its job and operational data. By default, Sidekiq tries to connect to Redis at localhost:6379. This typically works great during development but needs tuning in production. It is important to note that to configure the location of Redis, you must define both the `Sidekiq.configure_server` and `Sidekiq.configure_client` blocks. To do this put the following code into `config/initializers/sidekiq.rb`

**Using an ENV variable**

You can also set the Redis url using environment variables. This makes configuring Sidekiq on Heroku dead simple.

Set the `REDIS_PROVIDER` env var to the name of the env var containing the Redis server url. You may also use the generic REDIS_ULR which may be set to your own private Redis server. 










