# Resque and Sidekiq

**Background Jobs with Resque**
When building websites, it's important to keep your response times down. Long-running requests tie up server resources, degrade user perception of your site, and make it hard to manage failures

Solution: return a successful response, and then schedule some computation to happen later, outside the original request/response cycle. 

