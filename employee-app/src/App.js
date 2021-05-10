import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import Sort from './pages/Sort'
import Filter from './pages/Filter'

import EmployeeCard from './components/EmployeeCard';

export default function App() {
    return(
        <Router>
            <div>
            <Navbar />
                <Wrapper>
                
                <Route exact path="/" component={EmployeeCard} />
                <Route exact path="/sort" component={Sort} />
                <Route exact path="/filter" component={Filter} />
                
                </Wrapper>

            </div>
        </Router>
    )
}