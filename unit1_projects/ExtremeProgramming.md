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

















