**Understanding Dependencies**

  - it is difficult to talk about OOP without mentioning dependencies, loose coupling, and with good reason. 

**What is a Dependency?**

  - A dependant depends on its dependencies.
  - two classes that uses each other are called coupled. The coupling between classes can be "loose" or "tight", or somewhere in between. The tightness of a coupling is not binary. It is not eiher loose or tight. The degrees of tightness are continous, not discrete. 
  - It is also possible to describe or characterize dependencies as "strong" or "weak". A tight coupling leads to strong dependencies, and a loose coupling leads to weak dependencies, or even no dependencies in some situations. 
  - Dependencies or couplings, are directional. When A depends on B doesn't mean that B also depends on A.

**Why are Dependencies Bad?**

  Dependencies are bad because they decrease reuse. Decreased reuse is bad for many reasons. A lot of times reusing methods, classes can have a positive impact on development speed, code quality, code readability.

**Dependency Types**

  A dependency isn't just a dependency. There are several types of dependencies. Each type leads to more or less flexibility in the code. 
    - Class Dependencies
    - Interface Dependencies
    - Method / Field Dependencies

  Class dependencies are dependencies on classes
  Interface dependencies are dependencies on interfaces
  Method or field dependencies are dependencies on concrete methods or fields of an object. 

**Local and Context Dependecies**

  When developing applications it is normal to break the application into minor components. Some of these components are general purpose components, which could be useful in other applications too. Other components are applications specific and are not of any use out of the application. 

  - any classes bleonging to the API are "local". The rest of the application is the "context". If a general purpose component depends on application specific classes, this is called a "context dependency". Context dependencies are bad because it makes the the general purpose component unusable outside of the application too. 
  - Creating context dependencies are often created to try to simplify the design of the application. 

**Summary**

  In general interface dependencies are preferable over class dependencies. Method and field dependencies can be very useful, but by their very nature they are also typically hidden dependencies, and hidden dependencies makes it harder for users of your component to detect it, and in so being satisfy it. 

  Try to avoid unnecessarily extensive dependencies. Keep in mind though, that unnecessarily extensive dependencies often occur when you group multiple parameters into a class. This is a common refactoring that makes the code simpler, but can cause unecessarily extensive dependencies. 

**Coupling aka (Dependencies)**

  - *coupling* can be described as the manner and degree of *interdependence* between software modules; a measure of how closely connected two routines or modules are; the strength of the *relationships* between modules.

  - coupling is usually contrasted with *cohesion*. Low coupling often correlates with high cohesion. Low coupling is often a sign of a *well-structured* computer system and a *good design*, and when combined with high cohesion, supports the general goals of high *readablity* and *maintainability*.

  *Tight Coupling* = more interdepency, more coordination, mor information flow.
  *Loose Coupling* = less interdepency, less coordinatio, less information flow.

  **Disadvantages**

  Tightly coupled systems
  1. A change in one module usually forces a ripple effect of changes in other modules.
  2. Assembly of modules might require more effort and/or time due to the increased inter-module dependency. 
  3. A particular module might be harder to reuse and/or test because dependent modules must be included. 

  **Coupling versus cohesion**

  Coupling refers to the interdependencies between modules, while cohesion describes how related are the functions within a single module. Low cohesion implies that a given module performs tasks which are not very related to each other and hence can create problems as the module becomes large.

**Dependency Hell**

 - dependency hell = frustration of software users who have installed software packages which have dependencies on specific versions of other software packages. The dependency issue arises around shared packages/libraries on wich several other packages have dependencies but where they depend on different and incompatible version of the shared packages. 

 - *efferent coupling* is a metric that measures the number of data types a class knows about. A large efferent coupling can indicate that a class is unfocused. It may also indicate brittleness, since it depends on the stability of all the types to which it is coupled. 

**Cohesion**

  cohesion refers to the degree to which the elements of a module belong together. So, cohesion measures the strength of a relationship between the functionality within a given module. 

  Modules with high cohesion tend to be preferable because high cohesion is associated with *robustness*, *reliability*, *reusability*, and *understandability*. Low cohesion is usually associated with undesirable traits such as being difficult to maintain, test, reuse, or even understand. 
  
  High cohesion is associated with loose coupling. It comes down to finding a balance and finding the characteristics of "good" programming practices that reduce maintenance and modification costs. 

  If a method that serve a class tend to be similar in many aspects, then the class is said to have high cohesion. In a highly cohesive system, code readability is increased, while complexity is kept manageable. 

  Cohesion is increased if:
    - the functionalities embedded in a class, accessed through its methods, have much in common. 
    - methods carry out a small number of related activities, by avoiding coarsely grained or unrelated sets of data. 

  Advantages of high cohesion:
    - reduced module complexity
    - increased system maintability, because logical changes in the domain affect fewer modules, and because changes in one module require fewer changes in other modules. 
    - increased module reusability, because application developers will find the component they need more easily among the cohesive set of operations provided by the module. 





