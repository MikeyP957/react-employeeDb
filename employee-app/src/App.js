import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';

export default function App() {
    return(
        <Router>
            <div>
                <Navbar />
            </div>
        </Router>
    )
}