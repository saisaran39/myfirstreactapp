import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
        </div>
    );
};

export default HomePage;