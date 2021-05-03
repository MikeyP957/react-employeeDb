import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Card from './components/Card'

export default function App() {
    return(
        <Router>
            <div>
                <Navbar />
                <Card />
            </div>
        </Router>
    )
}