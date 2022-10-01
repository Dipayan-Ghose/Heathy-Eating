import React from "react";
import './Ques.css';
const Ques = () => {
  return (
    
    <div className="text">
      <h5>No 1</h5>
      <p>
        React is one of the most popular JavaScript libraries for mobile and web
        application development.React contains a collection of reusable
        JavaScript code snippets used for user interface building called
        components. One of the biggest advantages of using React is that we can
        infuse HTML code with JavaScript. We may have noticed that the syntax of
        the HTML code above is similar to XML. That said, instead of using the
        traditional DOM class, React uses className. JSX tags have a name,
        children, and attributes. Numeric values and expressions must be written
        inside curly brackets. The quotation marks in JSX attributes represent
        strings, similarly to JavaScript. In most cases, React is written using
        JSX instead of standard JavaScript to simplify components and keep code
        clean.
      </p>
      <br></br>
      <h5>No 2</h5>
      <h6>Differences</h6>
      <p>
        Props:
        1. Props are read-only.
        2. Props are immutable.
        3. Props can be accessed by the child component.
        4. Props are external and controlled by whatever renders the component. <br></br>
        State:
        1. State changes can be asynchronous.
        2. State is mutable.
        3. State cannot be accessed by child components.
        4. The State is internal and controlled by the React Component itself.
      </p>
      <h5>No 3
      </h5>
      <p>
      1. Validating input field.
      2. Live filtering.
      3. Trigger animation on new array value.
      4. Update paragraph list on fetched API data.
      </p>
    </div>
  );
};

export default Ques;
