import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Card from './components/Card'
import EmployeeContainer from './components/EmployeeContainer'
import FetchEmployee from './components/FetchEmployee';

export default function App() {
    return(
        <Router>
            <div>
                <Navbar />
                <FetchEmployee />

            </div>
        </Router>
    )
}