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











