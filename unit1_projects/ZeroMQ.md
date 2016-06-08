#ZeroMQ Messaging Library

**Introduction**

ZeroMq is a truly remarkable communication library that benefits the developers greatly with its rich and mature feature set. 

**About**

ZeroMQ is a library used to implement messaging and communication systems between applications and processes - fast and asynchronously. 

If you have past experience with other application messaging soultions such as RabbitMQ it might come a little bit challenging to understand the exact position of ZeroMQ. When compared to some much larger projects, which offer all necessary parts of enterprise messaging, ZeroMQ remains as just a lightweight and fast tool to craft you own.

**This Article**

ZeroMQ can be considered the backbone for implementing the actual communication layer of your application. 

**Programming with ZeroMQ**

ZeroMQ as a library works through sockets by following certain network communication patterns. It is designed to work asynchronously, and that's where the MQ suffix to its name comes - from thread queuing messages before sending them. 

**ZeroMQ socket types**

ZeroMq differs in the way its sockets work. Unlike the synchronous way the regular sockets work, ZeroMQ's socket implementation "present an abstraction of an asynchronous message queue". 

The way these sockets work depend on the type of socket chosen. And flow of messages being sent depend ont he chosen patterns, of which there are four: 

- Request/Reply Pattern: Used for sending a request and receiving subsequent replies for each one sent. 

- Publish/Subscribe Pattern: Used for distributed data from a single process (e.g. publisher) to multiple recipients (e.g.  subscribers).

- Pipeline Pattern: Used for distributing data to connected nodes.

- Exclusive Pair Pattern: Used for connecting two peers together, forming a pair. 

**Simple Messaging and Use-cases**

- For simple communications between a server and a client
- Checking information and requesting updates
- Sending checks and updates to the server
- Echo or ping/pong implementations

ex: publish/subscribe pattern is used for evenly distributed messages across varoius consumers. Automatic updates for scoreboards and news can be considered as possible areas to use this solution
ex: sending two different messages - simultaneously - inteded for different subscribers. 
ex: pipelining pattern can be used in cases where there are list of queued items need to be routed (i.e. pushed in line) for the one asking for it (i.e. those who pull).








