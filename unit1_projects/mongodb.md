# MongoDB
MongoDb is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.

#Database
Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases. 

#Collection
Collection is a group of MongoDb documents. It is the equivalent of an RDBMS table. A collections exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose. 

#Document
A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data. 

Any relational database has a typical schema design that shows number of tables and the relationship between these tables. While in MongoDB there is no concept of relationship

#Advantages of MongoDB over RDBMS

  - Schema less: MongoDB is document database in which one collection holds different documents. Number of fields, content, and size of the document can differ from one document to another
  - Structure of single object is clear
  - no complex joins
  - deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL
  - Tuning
  - Ease of scale-out: MongoDB is easy to scale
  - Conversion / mapping of application objects to database objects not needed
  - Uses internal memory for storing the (windowed) working set, enabling faster access of data

#Why use MongoDB

  - Document Oriented Storage: Data is stored in the form of JSON style documents
  - Index on any attribute
  - Replication & High Availability
  - Auto-Sharding
  - Rich Queries
  - Fast In-Place Updates
  - Professional Support By MongoDB

