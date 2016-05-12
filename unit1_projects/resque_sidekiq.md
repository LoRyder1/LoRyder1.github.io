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

