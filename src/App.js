import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
// import Refs from './Refs';
// import Test from './TestComp';
// import TestComponent from './TestComponent';
// import SnapShotComp from './SnapShotComp';
// import ParentComp from './ParentComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';

function App(props) {
  useEffect(() => {
    console.log("Page called")
  },[props])
  return (
    <>
    <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
        </Router>
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
