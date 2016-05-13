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









