##Extreme Programming Explained

- problem is the cost of changing a piece of software necessarily rises dramatically over the course of time. How do you address that?

*Fundamentals*
  - *distinguish* between the decisions to be made by business interests and those to be made by project stakeholders.
  - *writing unit tests* before programming and keeping all of the tests running at all times.
  - *integrating* and testing the whole system - several times a day.
  - producing all software in *pairs*, two programmers at one screen.
  - starting projects with a simple design that constantly *evolves* to add needed flexibility adn remove unneeded complexity.
  - putting a minimal system into production *quickly* and growing it in whatever directions prove most valuable.

*Why is XP so controversial?*
  - don't force specializations among analysts, architects, programmers, testers, and integrators -- every XP programmers participates in all of these critical activities every day. 
  - don't conduct complete up-front analysis and design
    - an XP project starts with a quick analysis of make analysis and design decisions throughout development. 
  - develop infrastructure and frameworks as you develop your application, not up-front--delivering business value is *heartbeat* that drives XP projects.
  - don't write and maintain implementation documentation--communication in XP projects occurs face-to-face, or through efficient tests and carefully written code. 

**Preface**

  XP takes commonsense principles and practices to extreme levels.

  - if *code reviews* are good, do it all the time
  - if *testing* is good, everybody will test all the time
  - if *design* is good, we'll make it part of everybody's daily business(refactoring).
  - if *simplicity* is good, always implement the simplest thing that could possibly work.
  - if *architecture* is important, everybody will work defining and refining the architecture all the time.
  - if *integration* testing is important, then we'll integrate and test several times a day (continuous integration).
  - if short iterations are good, we'll make the iterations really really short - seconds and minutes and hours, not weeks and months and years. 

  *XP makes two sets of promises*

    - XP promises that they will be able to work on things that really matter, every day. They won't have to face scary situations alone. They will be able to do everyhing in their power to make their system successful. They will make decisions that they can make best, and they won't make decisions they aren't best qualified to make. 
    - To customer and managers, XP promises that they will get the most possible value out of every programming week. Every few weeks they will be able ot see concrete progress on goals they care about. They will be able to change the direcion of the project in the middle of development without incurring exorbitant costs. 

    Promises - reduced project risk, improve responsiveness to business changes, improve productivity throughout the life of a system, and add fun to building software in teams-all at the same time.

**What is XP?**

  XP is a lightweight, efficient, low-risk, flexible, predictable, scientific, and fun way to develop software. 

  - early, concrete, and continuing feedback from short cycles
  - incremental planning approach, expected to evolve over the life of the project.
  - flexibly schedule implementation of functionality
  - reliance on automated tests to catch defects early
  - reliance on oral communication, tests, and source code to communicate system structure and intent
  - reliance on evolutionary design process that lasts as long as the system lasts.
  - reliance on the close collaboration of programmers with oridinary skills
  - reliance on practices that work with both the short term instincts of programmers and the long-term interests of the project.

  XP is the answer to the question "How would you program if you had enough time?" 
    - if you had enough time then you would write tests; you would restructure the system when you learned something; you would talk a lot with fellow programmers and with the customer.
    - the mentality of sufficiency is also good business. It creates its own efficiencies, just as the mentaliy of scarcity creates its own waste. 

**The Basic Problem: Risk**

  -schedule slips, project cancelled, system goes sour, defect rate, business misunderstood, business changes, false feature rich, staff turnover

  Solution
    - short release cycles
    - minimum vialbe product
    - create and maintain comprehensive suite tests
    - programmers test function by function and customers test program feature by feature
    - customer must be integral part of team
    - shorten release cycle
    - only the highest priority tasks are addressed
    - programmers accept responsiblity for estimating adn completeing their own work, encourage human contact among the team

**Development Episode**

  Day-to-day programming proceeds from a task clearly connected to a feature teh customer wants, to tests, to implementation, to design, and through to integration. 

  XP development cycle:
    - pairs of programmers program together
    - development is driven by tests, You test first, then code. Until all the tests run, you aren't done.
    - pairs don't just make test cases run. They also evolve the design of the system. Changes aren't restricted to any particular area. Pairs add value to the analysis, design, implementation, and testing of the system. They add that value wherever the system needs it. 
    - integration immediately follows development, including integration testing. 

** Economics of Software Development**

  Need to make software development economically more valuable by spending money more slowly, earning revenue more quickly, and increasing the probable productive lifespan of our project. Most of all need to increase the options for business decisions. 

  Calculating the worth of options
    - ...
    - the uncertainty in the eventual value of the prize

    Create a project management strategy that maximizes the value of the project analyzed
      - accurate and frequent feedback about progress
      - many opportunities to dramatically change the requirements
      - a smaller initial investment
      - the opportunity to go faster
  
    The greater the uncertainty, the more valuable the strategy will become. 

    eliminate downside risk - there is a cost to implementing a feature and it may be more expensive to do it now rather than wait. The value is uncertain and its value could be zilch.

**Four Variables**

  We will control four variables in our projects - cost, time, quality, and scope. Of these, scope provides us the most valuable form of control. 
    - Cost
    - Time
    - Quality 
    - Scope
  The way the software dev game is played is that external forces get to pick the values of any three of the variables. The dev team gets to pick the resultant value of the fourth variable. 
  
  The solution is to make the four variables visible. If everyone can see all four variables, they can consciously choose which variables to control. 

  *Quality* - by insisting on better quality you can get projects done sooner, or you can get more done in a given amount of time. There is a dichotomy between internal quality and external quality. Sacrificing internal quality is a short term play. 

  There is a *human effect* from quality. Everybody wants to a good job, and they work much better if they feel they are doing good work. If you deliberately downgrade quality, your team might go faster at first, but soon the demoralization of producing crap will overwhelm any gains you temporarily made from not testing, or not reviewing, or not sticking to standards. 

  For software development scope is the most important variable to be aware of. Once of the greatest problems in development is that the customer can't tell us what they want and when we give them what they want - they don't like it. The requirements are never clear at first. Customers can never tell you exactly what they want. 

  *Scope* and the *softness of the requirement* should be looked at as an opportunity. Because it is *soft*, we can shape it- a little this way, a little that way. If time gets tight toward a release date, there is always somehting that can be deferred to the next release. By not trying to do too much, we preserve our ability to produce the required quality on time. 

  Build a process that can *tolerate change easily*, because the project have the tendency to change often. Why build a road you never drive on because you took another turn.

  If you drop important functionality at the end of every release cycle, the customer would soon get upset. 

    XP uses two strategies
      1. get lots of practice making estimates and feeding back the actual results. Better estimates reduce the probability that you will have to drop funcitonality.
      2. Implement the most important requirements first, so if further functionality has to be dropped it is less important than the functionality that is already running in the system. 

**Cost of Change**

  Under certain circumstances, the exponential rise in the cost of changing software over time can be flattened. If we can flatten the curve, old assumptions about the best way to develop software no longer hold. 

  The goal of XP is to reduce the cost of change over time. It is widely assumed the code maintenance is exponential over time. The goal is to develop software where the cost of change doesn't rise exponentially over time, but rises much more slowly eventually reaching an asymptote.

  If this is possible you would delay making the big decisions as late as possible to defer the cost of making the change and also would in turn be increasing the chance that the decision is right. 

  The goal is to make change cheap. The additional value and reduced risk of early feedback outweights the additional cost of early change. 

  *Easy to modify code*
    - simple design, no extra design element - no ideas that weren't used yet but were expected to be used in the future. 
    - automated tests so we had confidence and know we didn't accidentally changed the existing behavior of the system.
    - lots of practice in modifying the design, so when the time came to change the system, we weren't too afraid to try it. 

  * simple design, tests, and an attitude of constant refinement of design * = flattened curve. 

  Goal is to make decisions quickly, but back each decision with automated tests, and that prepares you to improve design

** Learning to Drive **

  We need to control the development of software by making many small adjustments, not by making a few large adjustments, kind of like driving a car. This means that we will need the feedback to know when we are a little off, we will need many opportunities to make corrections, and we will have to be able to make those corrections at a reasonable cost. 

  "Driving is not about getting the car going in the right direcion. Driving is about constantly paying attention, making a little correction this way, a little correction that way."

  *Change is the only constant*

    - everything changes in software, the requirements change, the design changes, the business chanes, the technology changes, the team changes, the team members change. The problem is the inability to cope with change when it comes.
    - our job as programmers is to give the customer a steering wheel and give them feedback about exactly where we are on the road. 

**Four Values**

  We will be successful when we have a style that celebrates a consistent set of values that serve both human and commercial needs: communication, simplicity, feedback, and courage. 

    - communication, simplicity, feedback, and courage

  *Communication*
  - the effect of testing, pairing, and estimating is that programmers and customers and managers have to communicate.   
  
  *Simplicity*
  XP makes a bet that it is better to do a simple thing today and pay a little more tomorrow to change it if it needs it, than to do a more complicated thing today that may never be used anyway. The simpler your system is, the less you have to communicate about, which lead to more complete communication, especially if you can simplify the system enough to requrie fewer programmers. 

  *Feedback*
  "Don't asky me, ask the system."

    - concrete feedback about the current state of the system is absolutely priceless. Optimism is an occupational hazard of programming. Feedback is the treatment.
    - the thinking goes that once a project is in production nothing interesting can be done. This is exactly backwards. In development is a temporary state. It is far better to give the system independent life, to make it stand and breathe on its own. 
    - It is best to live with supporting production and developing new functionality simulatneously. Get used to juggling production and development sooner rather than later. 

  *Courage*

    Don't be afraid to throw away bad code. Sometimes you have to have courage to throw away something if it isn't working or the best decision. 

    XP's design strategy resembles a hill-climbing algorithm. You start with a simple design, them you make it a little more complex, then a little simpler, then a little more complex. The problem with hill-climbing algorithms is reaching local optima, where no small change can improve the situation, but a large change could. 

    Courage supports courage because it opens the possiblity for more high-risk, high-reward experiments. 

    - simplicity supports courage because you can afford to be much more courageous with a simple system. 
    - feedback supports courage because you feel much safer trying radical surgery on the code if you can push a button and see the test turn green at the end.

  *The Values in Practice*

    - there is a deeper value below the surface of the other four - respect. 
    - Given some minimal passion, XP provides some positive feedback. This is not manipulative; it's just enjoying being part of something that works, instead of part of something that doesn't work. 

**Basic Principles**

  1. Rapid feedback
  2. Assume simplicity
  3. Incremental change
  4. Embracing change
  5. Quality work

  *Rapid feeback* 
    - time between an action and its feedback is critical to learning. 
  *Assume simplicity*
    - treat every problem as though it can be solved with ridiculous simplicity
  *Incremental Change*
    - big changes made all at once just don't work.
    - any problem is solved with a series of the smallest changes that make a difference. 
  *Embracing change*
    - the best strategy is the one that preserves the most options while actually solving your most pressing problem.
  *Quality work*
    - nobody likes working sloppy. Quality isn't really a free variable. The only possible values are "excellent" or "extremely excellent".

    Play to win,  don't play to not lose. A lot of times during software development - lots of paper is written, lots of meetings are held, everyone is trying to develop "by the book," not because it makes any particular sense, but because they want to be able to say at the end that it wasn't their fault, they were following the process.

  *Open, hones communication*
  *accepted responsibility*
  *local adaptation*

    Maintain in your XP repertoire few, simple, valuable

  *Honest measurement*
    - lines of codes is a useful measurement in the face of code that shrinks when we learn better ways of programming. 

**Back to Basics**

  We want to do everything we must do to have stable, predictable software development. But we don't have time for anything extra. The four basic activities of development are coding, testing, listening, and designing. 

  "Learning to Drive". Four values - communication, simplicity, feedback, and courage. 

  *Coding*
    - what do we want to get out of coding? - learning.
    - communicate clearly and concisely

  *Testing*
    - software features that can't be demonstrated by automated tests simply don't exist.
    - "Test Infected" - used to describe people who won't code if they don't already have a test. 
    - tests keep the program alive longer - your confidence in the system increases over time.
    - programming with tests is funner, you have more confidence.
    - programming and testing together is also faster than just programming. The gain in productivity comes from a reduction in the time spend debugging. You no longer spend an hour looking for a bug. 

    There is the danger of testing done badly. - this can be like looking through a set of rose-colored glasses. The trick with testing is finding the level of defects you are willing to tolerate. 
    Should have unit tests written by programmers to convince themselves that their programs work the way they think the programs work. We will also have functional tests written by the customers to convince themselves that the system as a whole works the way they think the system as a whole should work. 
    There are two audiences for tests. Programmers need to make their confidence conrete in the form of tests. The customer needs to prepare a set of tests that represent their confidence. - "Well i guess if you can compute all of these cases, the system must work."
  
  *Listening*
    - programmers don't know anything, you have to ask someone else.
    - if you are going to ask questions, then you'd better be prepared to listen to the answers.

  *Designing*
    - creating a structure that organizes the logic in the system. Good design organizes the logic so that a change in one part of the system doesn't always require a change in another part of the system. Good design ensures that every piece of logic in the system has one and only one home. Good design puts the logic near the data it operates on. Good design allows the extension of the system with changes in only one place. 

    Coding, Testing, Listening, Designing

##The Solution

**A Quick Overview**

  rely on the synergies between simple practices, practices that often were abandoned decades ago as impractical or naive. 

  1. learning to drive
  2. four values - communication, simpicity, feedback, and courage
  3. principles
  4. four basic activities - coding, testing, listening, and designing

  *Planning Game* - quickly determine the scope of the next release by combining business priorities and technical estimates. As reality overtakes the plan, update the plan. 

  *Small Releases* - put a simple system into production quickly, then release enw version on a very short cycle

  *Metaphor* - guide development with a simple story on how it works.

  *Simple design* - system should be designed as simply as possible at any given moment
    1. runs all the tests
    2. has no duplicated logic. be wayr of hidden duplication like parallel class hierarchies
    3. states every intention important to the programmers
    4. has the fewest possible classes and methods

  *Testing* - write tests

  *Refactoring* - programmers restructure the system without changing its behavior to remove duplication, improve communication, simplify, or add flexibility.

  *Pair programming* - 

  *Collective ownership* - anyone can change any code anywhere in the system at any time.

  *Continuous integration* - integrate and build the sytem many times a day, every time a task is completed.

  *40 hour week* - Work no more than 40 hours a week as a rule

  *On-site customer* - include a real, live user on the team.

  *Coding standards* - Programmers write all code in accordance with rules emphasizing communication through the code.

**How Could This Work**

  The practices support each other. The weakness of one is covered by the strength of others.
  
  Any one practice doesn't stand well on its own (with the possible exception of testing). they require the other practices to keep them in balance. 
  
**Management Strategy**

  We will manage the overall project using business basics-phased delivery, quick and concrete feedback, clear articulation of the business needs of the system, and specialists for special tasks. 

  Fall back to:
    1. accepted responsibility - manager should highlight
    2. quality work - based on trust
    3. incremental change - manager should provide guidance
    4. local adaptation - manager should take the lead in adapting
    5. travel light - manager shouldn't impose a lot of overhead
    6. honest measurement - whatever metris the manager gathers should be at realistic levels of accuracy. 

  The strategy that emerges is more like decentralized decision making than centralized control. The manager should run the Planning Game, to collect metrics, to make sure the metrics are seen by those whose work is being measured, and occasionally to intervene in situations that can't be resolved in a distributed way. 

  *Metrics*

    - ratio between estimated dev time and calendar time is the basic measure for running the Planning Game. It lets the team set the Project Velocity.

  *Coaching*

    - coaching is primarily concerned with the technical execution (and evolution) of the process. The ideal coach is a good communicator, not easily panicked, technically skilled (although this is not an absolute requirement), and confident.
    - the idea of the coach is to not be the lead genius, but to get others to make good decisons. 

      - be available as a dev partner
      - see long-term refactoring goals
      - help programmers with individual technical skills, like testing, formatting, and refactoring
      - explain the process to upper-level managers

  *Tracking*

    You can make all the estimates you want, but if you don't measure what really happens against what you predicted would happen, you won't ever learn. 

  *Intervention*

    sometimes decisions need to be made, even unpopular ones - and seeing the consequences through to the end. Humility is important. Never wait on intervention as it will only make the problem worse.

**Splitting Business and Technical Responsiblity**

  One key to our strategy is to keep technical people focused on technical problems and business people focused on business problems. the project must be driven by business decisions, but the business decisions must be informed by technical decisions about cost and risk.

    - Business people should choose
      1. the scope or timing of releases
      2. the relative priorities of proposed features
      3. the exact scope of proposed features

    - Developers
      1. estimates of the time required to implement various features
      2. estimates of the consequences of various tech alternatives
      3. a dev process that suits their personalities
      4. what set of practices they will use to begin with
    
  *Choice of Technology*
    - choice should be a business decision informed by input from the developer.

  *What if It's Hard?*
    - you do all you can to encourage smaller scope, but sometimes it is important to go over the trenches. 
    - the split between business and development is not an excuse to avoid tough jobs. It is a way of sorting out those jobs that are geninely tough from those jobs that you haven't figured out how to make simple yet. 

**Planning Strategy**

  We will plan by quickly making an overall plan, then refining it further and further on shorter adn shorter time horizons - years, months, weeks, days. We will make the plan quickly and cheaply, so there will be little inertia when we must change it. 

  Planning 
    - brings the team together
    - decide on scope and priorities
    - estimate cost and schedule
    - give everyone involved confidence that the system can actually be done
    - provide a benchmark for feedback

    Principles for Planning
      1. do only planning you need for the next horizon
      2. accepted responsibility - responsibility can only be accepted not given.
      3. person responsible for implementation gets to estimate
      4. ignore dependencies between parts
      5. planning for priorties vs planning for development

  *The Planning Game*

    - the best environment is one of mutual trust, each party respects the other, each party believes that the other has their best interest at heart. Each party is willing to let the other do their job, joining the skills, experience and perspective of both. 

  *The Goal* - maximize the value of the software produced

  *The Strategy* - invest as little as possible to put the most valuable functionality into production as quickly as possible.

  *The Players* - if they are smart they will support their decisions by referring to 
    - real users of the product
    - focus groups
    - salespeople

  *The Moves*
    - three phases 
      1. exploration
      2. commitment
      3. steer

  *Iteration Planning*
    gives the customer the capability of steering development every three weeks. Within an iteration, the development team applies nearly the same rules to plan their activities. 

  *Constraints on Iteration Planning*
    - don't plan too much, reality will never consent to match the plan exactly
    - you want rapid feedback
    - individuals responsible for delivering something must also be responsible for estimating it. 
    - limit the scope of development to what is really needed. 
    - you want a process that doesn't generate too much pressure that people do things that turn out to be stupid.

**Development Strategy**

  Unlike the management strategy, the development strategy is a radical departure from conventional wisdom-we will carefully craft a solution for today's problem today, and trust that we will be able to solve tomorrow's problem tomorrow.

  Dev strategy begins with:
    iteration planning, continuous integration, collective ownership, and pair programming.
  
  *Continuous Integration* 
    - no code sits unintegrated for more than a couple of hours. 
    - At the end of every dev episode, the code is integrated with the latest release and all the tests run at 100%. 

    At the outer limit of continuous integration, every time you changed a method, the change would instantly be reflected in everyone else's code. 

    Integrating after a few hours gives many of the benefits of both styles - single programmer and instantaneous integration. 

    Constant refactoring beraks the system into lots of little object and lots of little methods, this lowers the chance that two pairs of programmers will change the same class or method at the same time.

    Another important reason to accept the costs of continuous integration is that it dramatically reduces the risk of the project. 

    Continuous integration allows for a rhythm to development, it's almost like breathing, you form an idea, you express it, you add it to the system. Now your mind is clear, ready for the next idea. 

  *Collective Ownership*

    seemingly crazy idea that anyone can change any piece of code in the system at any time, without tests you'd be dead in the water trying to do this. 

    - another effect is that because of collective ownership complex code doesn't exist very long. If the simplification doesn't work, then the code will be thrown away. 
    - prevent complex code from entering the system
    - increases your feeling of personal power on a project.
    - spread knowledge of the system around the team
    - reduces project risk

  *Pair Programming*

    - pair programming is a subtle skill, one that you can spend the rest of your life getting good at. 
    - pair programming isn't just one person programming while another watches. Just watching someone program is about as interesting as watching grass die in a desert. It is a dialog between two people trying to simultaneously program (and analyze and design and test) and understand together how to program better. It is a conversation at many levels, assisted by and focused on a computer. 
    - after a few week the junior partner is expected to pick up the larger patterns and notice deviations from those patterns. 

    In a couple of months the gap between the partners is not nearly so noticeable as it was at first. 

    Pair programming works for XP because of communication, and there are few forms of communication more intense than face-to-face. So, pair programming works for XP because it encourages communication. It is like the analogy of a pool of water. When new info is learned it is like putting a drop of dye in the water. Because pairs switch so often the info diffuses throughout the team. The info becomes richer and more intense as it spreads and is enriched by the experience and insight of everyone on the team. 

    Pair programming is more productive than dividing the work between two programmers and then integrating. The resulting code quality is much higher, while one is typing the other is thinking more strategically. 

    Another important component is that some of the practices would not work without it. Under stress, people revert. They will skip writing tests, they will put off refactoring, they will avoid integrating. With a partner watching your partner won't let you skip. The chances of ignoring your commitment to the rest of the team is much smaller in pairs than it is when you are working alone. 

    The conversational nature of pair programming also enhances the software development process. You quickly learn to talk at many different levels, comparing and contrasting, talking about experiences, the practices you are using and how they can be made better. 

**Design Strategy**
  
  We will continually refine the design of the system, starting from a very simple beginning. We will remove any flexibility that doesn't prove useful. 

  *The simplest thing that could possibly work*

    1. communication - a complicated design is harder to communicate than a simple one. Come up with communicative designs
    2. simplicity - we should have a design strategy that will produce simple designs, but the strategy itself should be simple. Good design is never easy. But th expression of it should be. 
    3. Feedback - hard to know when you are right or wrong
    4. Courage - stopping after a little bit of design. 

    - create a design strategy that results in a design that is simple
    - quickly find a way to verify its quality
    - feed back what we learn into the design
    - crank the cycle time for this whole process down as short as possible

    The principles also work into the design strategy

     - small initial investment
     - assume simplicity 
     - incremental change
     - travle light - design strategy shoul produce no "extra" design

     As programmers, we get in the habit of anticipating problems. When they appear later, we're happy. 

     The common answer for the question, "When do you add more design?" A common answer is that you should design for tomorrow. 

      - This works if nothing changes between now and later and you know exactly what is going to happen, and you know exactly how to solve it, it is generally better to add what you need now, and add what you need later, too. 

    The problem with this strategy is uncertainty

      - sometimes tomorrow never comes (that is, the feature you designed ahead for is taken off your plate by the customer). 
      - sometimes you learn a better way to work between now and later. 

    You need to focus on designing for today's problems today, and tomorrow's problems tomorrow. 

    Design in a very simple way the first time you encounter it, the second time you use it make it more general. The first use only pays what it must. The second use pays for flexibility. This way you never pay for flexibility you don't use, and you tend to make the system flexible where it needs to be. 

  *How Does "Designing Through Refactoring" Work?*

    - when faced with a big refactoring, you have to take it in small steps (incremental change again).
    - design is not drawing a bunch of pictures and then implementing the system to conform to the pictures. 
      - that would be pointing the car, learning to drive points the way to a different style of design-get the car started, then point it a little this way, then a little that way, then this way again.

  *What is the Simplest?*

    the best design is the simplest design that runs all the test cases. But what do we mean by the simplest?

    Is the simplest design the one with the fewest classes? this would lead to objects that were too big to be effective. Is the simplest design the one with the fewest methods? This would lead to big methods and duplication. Is the simplest design teh one with the fewest lines of code? This would lead to compression for compression's sake and a loss of communication. 

    The simplest-four constraints
    1. the system(code and test together) must communicate everything you want to communicate
    2. The system must contain no duplicate code.
    3. The system should have the fewest posssible classes
    4. The system should have the fewest possible methods

    Purpose

      - the purpose of the design is first and foremost to communicate the intent of the programmers and, second, to provide a place for the logic of the system to live. 

      - if the design is viewed as a communication medium, then you will have objects or methods for every important concept. You will choose the names of classs and methods to work together. 

      - must find a way to eliminate all duplicate logic in the system

      - delete everything that doesn't have a purpose - either a communication purpose or a computational purpose. What you are left with is the simplest design that coul possibly work. 

  *How could this Work?*

    The traditional strategy for reducing the cost of software over time is to reduce the probability and cost of rework. XP takes the opposite tack. XP revels in rework. A day without refactoring is like a day witout sunshine. 

    - The idea is that risk is money just as much as time is money. If there is enough uncertainty, the value of the option of waiting is high enough that you would be better off waiting. 

    Design isn't free. Another aspect of this situation is that when you put more design in today, you increase the overhead of the system. There is more to test, more to understand, more to explain. Every day you don't just pay interest on the money you spent, you also pay a little design tax. The difference in today's investment and tomorrow's investment can be much greater and it is still a good idea to design tomorrow for tomorrow's problems. 

    The cost of making a design decision today is the cost of making the decision plus the interest we pay on that money plus the inertia it adds to the system. The benefit of making a design decision today is the expected value of the decision being profitably used in the future. 

    If the cost of today's decision is high, and the probability of tis beign right is low, and the probability of knowing a better way tomorrow is high, and the cost of putting in the design tomorrow is low, then we can conclude that we should never make a design decision today if we don't need it today. "Sufficient to the day are the troubles thereof."

    If the cost of making the change tomorrow is very much higher, when we shoud make the decision today on the off chance that we are right. If the inertia of the design is low enough, then the benefits of just-in-time design are less (you have really smart people).

  *Role of Pictures in Design*

    - some people really do think better about their design in terms of pictures instead of code. 
    - trouble drawing pictures indicates trouble with the design
    - designing with pictures is speed
    - in the time it would take you to code one design, you can compare and contrast three designs using pictures. 

    - the problem with pictures is that they can't give you concrete feedback, you are insulated from much of it. The feedback you are insulated from is exactly the feedback that teaches you the most - WIll this run teh test cases? Does this support simple code? This is feedback you can get only from coding. 

    Principles:
      1. small initial investment
      2. play to win
      3. rapid feedback
      4. working with people's instincts
      5. embracing change and travel light

    The XP strategy is designing with pictures is great, but as soon as a question is raised that can be answered with code, then the designers must turn to code for the answer. 

  *System Architecture*

    - If you have a good metaphor in place, everyone on the team can tell about how the system as a whole works. 

    - The Planning Game rules ask that the first iteration must be a functioning skeleton of the system as a whole. Still you have to the simplest thing that could possibly work. How can you reconcile these two?

    - For the first iteration, pick a set of simple, basic stories that you expect will force you to create the whole architecture. Then narrow your horizon and implement the stories in the simplest way that can possibly work. At the end of this exercise you will have your architecture. It may not be what you expected, but you will have learned something. 

    - What if you can't find a set of stories that forces you to create teh architecture you know, you absolutely know, you are going to need? Either you can put the whole architecture in place on speculation, or you can put as much architecture in place now as you need to meet your current needs, and trust that you can put more in later. I put in the architecture I need now and trust my ability to change it later. 

**Testing Strategy** 

  we will write test before we code, minute by minute. We will preserve these tests forever, and run them all together frequently. we will also derive tests from the customer's perspective. 

  XP testing is a confidence game. Every time you write some code, you think it is going to work. Every time you think it is going to work, you take that confidence out of the ether and turn it into an artifact that goes into the program. The confidence is there for their own use. And because it is there in the program, everyone else can use that confidence, too. 

  The same story goes for the customer, every time you think of something concrete the program should do, you turn it into another piece of confidence that goes into the program. The program jsut gets more and more confident. 

  you should write the tests that help get programs working and keep programs working. Nothing more. 

  there is the principle - "Work with human nature, not against it." Testing is not at the center of development. you must do this test and that test and oh yes this other one, too. Tests are there as instrumentation, and it is the behavior of the system being instrumented that everyone cares about, not the tests themselves. 

  Testing goes against human nature. If you release hte pig in you, you will see that you program without tests. Pair programming reduces the probability that both partners are releasing their pigs at the same moment. 

  Tests shouldn't interact with the others you write. This way you avoid the problem that one test fails and causes a hundred other failures. Nothing discourages testing more than false negatives. 

  Tests should be automatic. Tests are most valuable when the stress level rises, ahen people are working too much, when human judgement starts to fail. The tests must be automatic-returning an unqualified thumbs up/thumbs down indication of whether the system is behaving. 

  you should test things that might break. If code is so simple that it can't possibly break, and you measure that the code in question doesn't actually break in practice, then you shouldn't write a test for it. 

  Testing is a bet. The bet pays off when your expectations are violated. One way a test can pay off is when a test works that you didn't expect to work. Then yo better go find out why it works, because the code is smarter than you are. Another way a test can pay off is when a test breaks when you expected it to work. In either case, you learn something. The more you learn , the better you develop - that is software development. 

  The aim is to write those tests that pay off. you write tests that might pay off. As you test, you reflect on which kinds of tests tend to pay off and which don't, and write more of the ones that do pay off, and fewer fo the ones that don't. 

 *Who Writes Tests?*

  Programmers
  Customers

  The programmer-written unit tests always run at 100%. If one of hte unit tests is broken, no one on the team has a more important job than fixing the tests. 

  The customers write tests story-by-story. What would I need to check before I would be confident that this story was done? Each scenario they come up with turns into a test, in this case a funcitonal test. 

    Other testing
      1. parallel test - a test designed to prove that the new system works exactly like the old system
      2. Stress test - a test design to simulate the worst possible load. Stress tests are good for complex systems where the performance characteristics are not easily predictable
      3. Moneky test - a test designed to make sure the system acts sensibly in the face of nonsensical input. 

##Implementing XP

  *Adopting XP*

    adopt XP one practice at a time, always addressing the most pressing problem for your team. Once that's no longer your most pressing problem, go on to the next problem. 

    How to adopt?
      1. pick your worst problem
      2. Solve it the XP way
      3. When it's no longer you worst problem, repeat

    - the two obvious places to start are testing, and the Planning Game. 
    - Many projects are plagued with quality problems, or with an imbalance of power between business and development. 

    Solve the most pressing problem first - this addresses the objection that it is one size fits all. 

  *Retrofitting XP*
  
    Projects that want to change their existing culture are far more common than projects that can create a new culture from scratch. Adopt XP on running projects a little at a time, starting with testing or planning.

  *Testing*

    - when you need to add functionality to untested code, write tests for its current functionality first. 
    - when yo need to fix a bug, write a test first
    - when you need to refactor, write tests first

    Development will feel slow at first. You will spend much more time writing tests than you do in normal XP, and you will feel like you make progress on new functionality more slowly than before. However, the parts of the system that you visit all the time, the parts that attract attention and new features, will quickly be thoroughly tested. Soon, the parts of the system that are used most will feel like they were written with XP.

  *Design*

    you will want to fix everything at once. Don't. Take it a bit at a time. As you add new functionality, be prepared to refactor first. You are always prepared to refactor first before implementing in XP development, but you will have to do it more often as you are transitioning to XP. 

    Early on in the process identify some large-scale refactoring goals. 

    Demand driven testing strategy. Those parts of the system that you visit all the time in your development activities will soon feel like the code that you are writing now. The overhead of extra refactorings will soon fade. 

  *Planning*

  *Management*

    XP management is a game of indirection and influence. 

  *Development*

    Pair programming


  Make modest goals when transitioning to XP. If you're going to switch a troubled project to XP, make it a dramatic gesture. Half measures are going to leave everybody in more or less the same state that they were before. Carefully evaluate the current code base. Would you be better off withou it? If so flush it. All of it. Have a big bonfire and burn the old tapes. Take a week off. Start over fresh.

**Lifecycle of an Ideal XP Project**
  
  The ideal XP project goes through a short initial development phase, followed by years of simultaneous production support and refinement, and finally graceful retirement when the project no longer makes sense.

  *Exploration*
    "To go into production is to die." XP says exactly the opposite. Not to be in production is to be spending money without making money. Before you can go into production, however, you have to believe that you can go into production. 

    You are don with exploration when the customer is confident that there is more than enough material on the story cards to make a good first release and the programmers are confident that they can't estimate any better without actually implementing the system. 

    Experiment with technologies, performance limits, architectural ideas. While the team is practiing with the technology, the customer is practicing writing stories. 

  *Planning*

    The purpose of the planning phase is for the customers and programmers to confidently agree on a date by which the smallest, most valuable set of stories will be done. 

  *Iterations to First Release*

    Each iteration will produce a set of functional test cases of the stories scheduled for that iteration. The first iteration puts the architecture in place. Pick stories for the first iteration that will force you to create "the whole system, " even if it is in skeletal form. 

    When you detect deviations from the plan, then you need to change something. Maybe the plan needs to change-add or remove stories or change their scope. Maybe the process needs to change - add or remove stories or change their scope. 

    Ideally, at the end of every iteration, the customer will have compeleted the functional test and they will all run. At the end of the last iteration, you are ready to go into production.

  *Productionizing*

    The end game of release sees a tightening up of the feedback cycle. Instead of three week iterations, you may go to one-week iterations. You may have a daily standup meeting so everybody knows what everybody else is working on.

    Typically there will be some process for certifying the software is ready to go into production. Be prepared to implement new tests to prove your fitness for production. Parallel testing is often applied at this stage. 

    "Make it run, make it right, make it fast." Late in the game is the perfect time to tune, because you will have as much knowledge as possible embedded in the design of the system, you will have the most realistic possible estimates of the production load on the system, and you are likely to have the production hardware available. 

    During productionizing, you will slow down the pace at which you evolve the software. It isn't that software stops evolving, but rather that risk becomes more important in your evaluation of whether a change deserves to go into this release. The more experience you have with a system, the more insight you will have into how it should be designed. 

  *Maintenance*

    Maintenance is really the normal state of an XP project. You have to simultaneously produce new funtionality, keep the existing system running, incorporate new people into the team, and bid farewell to members who move on. 

    Every release begins with an exploration phase. You may try big refactorings that you were afraid of late in the previous release. 

    Developing a system that is in production is not at all the same as developing a system that isn't yet in production. You are more careful of the changes you make. 

    Being in production is likely to change your development velocity. 

    Be prepared to change the team structure to deal with production. You may want to take turns manning the "help desk," so most of the programmers don't have to deal with production interruptions most of the time. Be careful to rotate all the programmers through the position-there are things you learn from supporting production.

  *Death*

    Dying well is as important as living well. This is as true for XP as for people. 

    If the customer can't come up with any new stories, then it is time to put the system into mothballs. That is the good reason to die. 

    There is also a not-so-good reason to die-the system just isn't delivering. The customer needs features and you just can't add them economically. The defect rate creeps up to where it is intolerable. 

    THis is the entropic death you have fought against for so long. XP is not magic. Entropy eventually catches XP projects, too. 

**Roles for People**

  Certain roles hve to be filled for an extreme team to work - programmer, customer, coach, tracker.

  A sports team works best when there are certain roles that someone takes responsiblity for.

  These roles become customary, and sometimes even embedded in the rules of the game, precisely because they work. Good coaches are effective at getting a player to work well at their position. THey spot deviations from the usual practice of the position and either help the player correct the deviation, or understand why it is acceptable for that player to do things a little differently. 

  Great coaches realize that the positions are merely customary, not laws of nature. From time to time, the game changes or the players change enough so that a new position becomes possible or an old one becomes obsolete. 

  Another great facility of great sports coaches is their ability to mold the system to their players, instead of the other way around. You will do better by creating a new system that lets the team's talents shine. 

  *Programmer*

    The programmer is the heart of XP. If programmers could always make decisions that carefully balanced short-term and long-term priorities, there would be no need for any other technical people on the project besides programmers. 

    Your job isn't over when the computer understands what to do. Your first value is communication with other people. 

    You try to develop the most valuable software for the customer, but not to develop anyting that isn't valuable. If you can reduce the size of the problem enough, then you can afford to be careful with the work you do on what remains. Then, you are careful by habit. 

    There are skills that you must possess as an XP programmer that are not needed or at least not emphasized in other styles of development. Pair programming is a learnable skill, but one often at odds with the tendencies fo the sort of people who typically get into programming. Nerds aren't generally good at talking. 

    Another skill needed by the extreme programmer is the habit of simplicity. WHen the customer says, "You must do this and this and this," you have to be prepared to discuss which of those items is really necessary and how much of each. Simplicity also extends to the code you write. A programmer with every last analysis and design pattern ready at hand will not be likely to succeed with XP. You can do a better job if you have more tools in your toolbox than if you have fewer, but it is much more important to have a handful of tools that you know when not to use, than to know everything about everything and risk using too much solution. 

    You will needs sklls that are more technically oriented as well. You have to be able to program reasonably well. You have to be able to refactor, which is a skill with at least as much depth and subtlety as programming in the first place. You have to be able to unit test your code, which, like refactoring, requires taste and judgement to apply well. 

    You have to be willing to set aside the feeling of individual ownership of some portion of the system in favor of shared ownershiop of the whole system. If someone changes code that you wrote, in whatever part of the system, you have to trust the changes and learn from them. Of course, if the changes are wrong-headed, you are responsible for making things better. 

    Above all, you must be prepared to acknowledge your fears. Everybody is afraid-

      - afraid of looking dumb
      - afraid of being though useless
      - afraid of growing obsolete
      - afraid of not being good enough

    Without courage, XP just simply doesn't work. You would spend all of your time trying to desperately not to fail. Instead, if you are willing, with the help of your tem, acknowledge your fears. Then you can get on with the business of belonging to a team having fun writing great software. 

  *Customer*
  
    The customer is the other half oft he essential duality of extreme programming. THe programmer knows how to program. The customer knows what to program. Well, not at first, for course, but the customer is willing to learn just as much as the programmer is. 

    The skill involved in being an XP customer: writing good stories, an attitude that will make you successful. You have to feel comfortable influencing a project without being able to control it. Forces outside your control will shape what acutally gets builg just as much as the decisions you make. 

    You will have to make decisions. The best customers are those who will actually use the system being developed, but who also have a certain perspective on the problem to be solved. If you are a step or two removed from actually using the system, you will have to work extra hard to be sure that you accurately represent the needs of the real users. 

    You will have to learn how to write stories. This may seem like an impossible task at first, but the team will give you the gift of copious feedback on the first few you write. 

    you have to learn to write functional test. 

    You have to demonstrate courage. THere is a way from where you are today to where you want to be. This team can help you find it, if you will help them find it. 


  *Tester*

    Since a lot testing responsibility lies on the shoulders of the programmers, the role of tester in an XP team is really focused on the customer. You are responsible for helping the customer choose and write functional tests. If the functional tests aren't par of the integration suite, you are responsible for running the functional tests regularly and posting the results in a prominent place. 

    An XP tester is not a separate person, dedicated to breaking the system. 

  *Tracker*

    A tracker is the conscience of the team. Doing good estimates is a matter of practice and feedback. Keep an eye on the big picture. Halfway through an iteration you should be able to tell the team whether they are going to make it if they follow the current course or if they need to change something. 

    You are the team historian, keep a log of functional test scores and defects. 

    The skill needed most is the ability to collect the information you need without disturbing the whole process more than necessary. You want to disturb the process a little, to keep people aware of how much they actually spent on a task in a way they might not be aware of if you didn't ask. 

  *Coach*

    As a coach, you are responsible for the process as a whole. Everyone on an XP team is responsible for understanding their application of XP to some extent. 

    The most difficult thing I have found about being a coach is that you work best wehn you work indirectly. If you see a mistake in the design, first you have to decide whether it is important enough that you should intervene at all. Every time you guide the team, you make them that much less self-reliant. 

    Sometimes , however, you must be direct, direct to the point of rudeness. Confident, aggressive programmers are valuable precisely because they are confident and aggressive. However, this leaves them vulnerable to a certain kind of blindness, and the only cure is plain speaking. When you have let a situation deteriorate to the point that the gentle hand on the yoke can no longer work, you have to be prepared to grab the yoke with both hands and steer. 

    The role of the coach diminishes as the team matures. In keeping with the principles of distributed control and accepted responsibility, "the process" should be everybody's responsiblity. Early in the shift to XP this is too much to ask any programmer. 

  *Consultant*

    XP projects don't spawn a lot of specialists. Since everyone is pairing with everyone else, and the pairs float around so much, and anyone can accept responsiblity for a task if they want to, there is little chance that dark holes will develop where only one or two people understand the system. 

    This is a strength, because the team is extremely flexible, but it is also a weakness, because from time to time the team needs deep technical knowledge. The emphasis on simplicity of design reduces the occurrence of the need for the need for the pointy hat, but it will happen from time to time. 

  *Big Boss*

    If you're the big boss, what the team needs most from you is courage, confidence, and occasional insistence that they do what they say they do. It is likely to be difficult for you to work with the team at first. 

**20-80 Rule**

  The full value of XP will not come until all the practices are in place. Many of the practies can be adopted piecemeal, but their effects will be multiplied when they are in place together. 

  80% of the benefit comes from 20% of the work. XP makes use of this rule itself- put the most valuable 20% of functionality into production, do the most valuable 20% of the design, rely on the 20-80 rule to defer optimization. 

  For the 20-80 rule to apply, the system in question must have controls that are relatively independent of each other. If you are a little off balance, yo may as well be a lot off balance. You will only see 20% of the improvement when you have done 80% of these exercises. If you are off balance, you may as well be a lot off balance. It is a host of little factors, like getting your boots just right, that allow you to be right on balance. If any one is off, you'll be off. You will see slow improvement all along, but the last few changes you make will dramatically improve your skiing. 

  In XP the practices and principles work together with each other to create a synergy that is greater than the sum of the parts. It's not just that you do testing, it's that you are testing a simple system, an it got simple because you had a pair programming partner who challenged you to refactor and reminded you to write more tests and patted you on the back when you got rid of complexity and...

  Is XP all or nothing? You can get significant gains from parts of XP. It's just that there is much more to be gained when you put all the pieces in place. 

**What Makes XP Hard**

  Even though the individual practices can be executed by blue-collar programmers, putting all the pieces together and keeping them together is hard. It is primarily emotions-especially fear-that make XP hard. 

  The hard part of XP is putting all the pieces together, and then keeping them in balance. The pieces tend to support each other, but there are many problems, concerns, fears, events, and mistakes that can throw the process off balance. The whole reason you would "sacrifice" a senior technical person to be coach is because the problem of keeping the process on balance is so difficult. 

  Learning to see the world in the simplest possible terms is a skill and a challenge. Sometimes it is easier to do something more complicated than to do something simple. You have to challenge your value system. You have to learn to be dissatisfied with complexity, not to rest until you can't imagine anything simpler working. 

  It's hard to admit you don't know. XP is based on the premise that you can develop only as fast as you learn. It is sometimes frightening to go to the customer and ask them to explain what are to them the most elementary concepts. 

  It is hard to collaborate. Our whole education system is tuned to individual achievement. If you work with someone on a project, the teacher calls it cheating and punishes you. The reward systems in most companies, with individual evaluations and raises (often cast as a zero sum game), also encourages individual thinking. You will likely have to learn new people skills, interacting as closely with your team as you will in XP. 

  It is hard to break down emotional walls. Teams can not function properly if communication is not kept flowing, fears acknowledged, anger discharged, joy shared. 

  The XP practices are so sideways to what we have heard and said and maybe even been successful with in the past. One of the big difficulties is just how contrary XP sounds. I'm often afraid when I first meet a new manager that I will sound radical or crazy or impractical. 

  Little problems can have huge effects. You have to accept responsibility for your own process, you are accepting responsibility for being aware and fixing it when there is a problem. 

  Driving projects by steering a little at a time goes contrary to the car-pointing metaphor prevalent in lots of organizations. A final difficulty, an one that can easily sink an XP project, is that steering is just not acceptable in many compnay cultures. Early warning of problems is seen as a sign of weakness or complaining. You will need courage when your company asks you to act contrary to the process you have chosen for yourself. 

**When you SHouldn't Try XP**

  The exact limit of XP aren't clear yet. But there are some absolute showstoppers that prevent XP from working-big teams, distrustful customers, technology that doesn't support graceful change. 

  There are some practices in XP that are good idea regardless. Testing is a good example, the Planning Game probably works. There is a huge difference between all of it and not all of it. 

  The biggest barrier to the success of an XP project is culture: business culture. 

  A variant of "pointing the car" is the big specification. If a customer or manager insists on a complete specification or analysis or design before they begin the small matter of programming, then there is bound to be friction between the team's culture and the customer or manager's culture. The project may still be able to be successful using XP, but it won't be easy. 

  Another culture that is not conducive to XP is one in which you are required to put in long hours to prove your "commitment to the company." You can't execute XP tired. 

  Really smart programmers sometimes have a hard time with XP. Sometimes the smart people have the hardest time trading the "Guess Right" game for close communication and continuous evolution. 

  The amount of functionality to be produced and the number of people producing it don't have any sort of simple linear relationship. 

  The biggest bottlneck in scaling is the single-threaded integration process. 

**XP at Work**

  XP can accommodate the common forms of contract, albeit with slight modifications. Fixed price/fixed scope contracts, in particular, become fixed price/fixed date/roughly fixed scope contracts when run with the Planning Game. 

  How can you fit XP to common business practices? The wrong form of contract can easily break a project, regardless of tools, technology, and talent. 

  *Fixed Price*

    Fixe price and scope end up saying "The requirements weren't clear". The supplier wants to do as little as possible and the customer want to demand as much as possible.

    Within XP, the initial scope is a "for instance." Instead of fixed price/date/scope, the XP team offers something more like a subscription. 

    Another difference XP introduces is caused by small releases. Incremental delivery builds in the opportunity for the customer to terminate the contract if progress is slower than initially  estimated, or if business conditions make the whole project nonsense, and it gives the customer natural points to change the direction of the project. 

**Conclusion**

  All methodologies are based on fear. You try to set up habits that prevent your fears from becoming reality. XP is no different in this respect from any other methodology. The differenece is in what fears are embedded in XP. To the degree that XP is my baby, XP reflects my fears. I am afraid of: 

    1. Doing work that doesn't matter
    2. Having projects canceled because I didn't make enough technical progress
    3. Making business decisions badly
    4. Having business people make technical decisions badly for me
    5. Coming to the end of a career of building systems and realizing that I should have spent more time with my kids.
    6. Doing work I'm not proud of

  XP also reflects the things I'm not afraid of:

    1. Coding
    2. Changing my mind
    3. Proceeding without knowing everything about the future
    4. Relying on other people
    5. Changing the analysis and design of a running system
    5. Writing tests

  We can drive ourselves crazy with expectation. But by preparing for every eventuality we can think of, we leave ourselves vulnerable to the eventualities we can't imagine. 

  There is another way. The team can be perfectly prepared at any moment to go in whatever direction the business or the system demands. By giving up explicit preparation for change, paradoxically they become entirely prepared for any change. They expect nothing. They can no longer be surprised. 

