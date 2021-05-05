import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Card from './components/Card'

import EmployeeCard from './components/EmployeeCard';

export default function App() {
    return(
        <Router>
            <div>
                <Navbar />
                <EmployeeCard />

            </div>
        </Router>
    )
}