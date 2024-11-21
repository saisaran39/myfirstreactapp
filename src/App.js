import logo from './logo.svg';
import './App.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Refs from './Refs';
import TestComponent from './TestComponent';

function App() {
  return (
    <>
    <AboutUs />
    <ContactUs />
    <Refs/>
    <TestComponent name="Moksha"/>
    </>
  );
}

export default App;

// import React from "react";

// const name = "Learner";

// const element = (
//   <React.Fragment>
//     <h1>
//         Hello,
//         {name}.Welcome to GeeksforGeeks.
//     </h1>
//     <h2>This is h2 tag</h2>
//   </React.Fragment>
// );


// ReactDOM.render(element, document.getElementById("root"));
