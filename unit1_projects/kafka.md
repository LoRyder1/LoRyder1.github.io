#Enterprise service bus
-  a software architecture model used for designing and implementing communication between mutually interacting software applications in a service-oriented architecture (SOA). As a software architectural model for distributed computing, it is a speciality variant of the more general client-server model and promotes agility and flexibility with regard to communication between applications. Its primary use is in enterprise applicaitons integration (EAI) of heterogeneous and complex landscapes. 

#Introduction
Kafka is a distributed, partitioned, replicated commit log service. It provides the functionality of a messaging system, but with a unique design.

  - Kafka maintains feeds of messages in categories called topics
  - We'll call processes that publish messages to a Kafka topic producers
  - We'll call processes that subscribe to topcs and process te feed of published messages consumers
  - Kafka is run as a cluster comprised of one or more servers each of which is called a broker

Communication between the clients and the servers is done with a simple, high-performance. language agnostic TCP protocol. 

# What is Kafka ?

Kafka is a high-throuput distributed messaging system rethough as a commit log. Each commit, or message in Kafka's terminology, is immutable and represents a point in history that cannot change. Incoming messages are written to what is called the log.

Distributed messaging queues are mostly used to decouple producers and processors of data have become quite popular in the microservice world wehre each service should have a single responsibility. In the past, when monolithic architectures were all the rage, there wasn't as great of a need for messaging systems since most message passing was simply a call to another method which passed data in the application's memory. 

Now, with the trend to more distributed architectures, data still needs to flow between parts of the application, however it can no longer be transmitted in memory from one component to another as each component (or service) may live on different machines in different parts of the world. This is where messaging systems like Kafka come in. They act as the transportation system for this data (or messages) to flow and also usually include several features that help make all of this distributed communication easier to manage. 

Kafka can be used for: 

  - Messaging
  - Website Activity Tracking
  - Metrics
  - Log Aggregation
  - Stream Processing
  - Event Sourcing

Message queues and mailboxes are software-engineering components used for inter-process communication (IPC), or for inter-thread communication within the same process. They use a queue for messaging - the passing of control or of content. Group communication systems provide similar kinds of functionality. 

The message queue paradigm is a sibling fo the publisher/subscriber pattern, and is typically one part of a larger message-oriented middleware system. Most messaging systems support both the publisher/subscriber and message queue models in their API> 
