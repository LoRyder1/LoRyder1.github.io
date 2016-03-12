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

** Four Variables **

  We will control four variables in our projects - cost, time, quality, and scope. Of these, scope provides us the most valuable form of control. 
    - Cost
    - Time
    - Quality 
    - Scope
  The way the software dev game is played is that external forces get to pick the values of any three of the variables. The dev team gets to pick the resultant value of the fourth variable. 
  
  The solution is to make the four variables visible. If everyone can see all four variables, they can consciously choose which variables to control. 

  Quality - by insisting on better quality you can get projects done sooner, or you can get more done in a given amount of time. There is a dichotomy between internal quality and external quality. Sacrificing internal quality is a short term play. 

  There is a human effect from quality. Everybody wants to a good job, and they work much better if they feel they are doing good work. If you deliberately downgrade quality, your team might go faster at first, but soon the demoralization of producing crap will overwhelm any gains you temporarily made from not testing, or not reviewing, or not sticking to standards. 



