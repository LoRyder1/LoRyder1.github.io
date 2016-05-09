**React** is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags. React promises programmers a model in which subcompents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application. 

#One-way Data flow

Properties, a set of immutable values, are passed to a component's renderer as properties in its HTML tag. 

# Virtual DOM

Another notable feature is the use of a virtual DOM. React creates an in-memory data structure cache, computes the resulting differences, and then updates the browswer's displayed DOM efficiently. 

#JSX

React components are typically written in JSX, a JavaScript extension syntax allowing easy quoting of HTML and using HTML tag syntax to render subcomponents. 

# Architecture Beyond HTML

The basic architecture of React applies beyond rendering HTML in the browswer. 

#Rails and React

- Programming interactive user interfaces using JavaScript might be a tough task. User calls some action and we need to update his view - manipulating DOM using tool like jQuery. 
- Makes it possible to write really complex UI parts and easily compose with each other
- Improves code maintability, 
- Spending less time on maintaining code means more time spent on delivering business value for customers

 **A little bit of theory**

    - react objects are called components. Each of them may contain data and renders view in a declarative way - based only on current data state. 
    - Each React component has 2 inputs: 
      - props - shortcut of properties, these are mean to be immutable
      - state - mutable
    - After changing the state, React will automatically re-render the component to answer a new input
    - All React components must implement render method which must return another React object or null. 

 **Differences**
  diff between ppop JS frameworks = differences in their abstractions, thinking models, & terminology. 
  * Goal - abstract out the DOM in such a way that you don't deal directly with HTML Elements
  - new framworks force you to decompose the UI and interactions of your aplication. 

  - react view are rendered using components that contain additional components specified as custom HTML tags
  - React promises programmers a model in which subcomponents cannot directly affect enclosing components "data flows down"; efficient updating of the HTML document when data changes; and a clean separation between components on a modern single page. 
  

