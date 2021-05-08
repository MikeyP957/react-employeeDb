import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import Search from './pages/Search'
import Filter from './pages/Filter'

import EmployeeCard from './components/EmployeeCard';

export default function App() {
    return(
        <Router>
            <div>
                <Wrapper>
                <Navbar />
                <Route exact path="/search" component={Search} />
                <Route exact path="/filter" component={Filter} />
                <EmployeeCard />
                </Wrapper>

            </div>
        </Router>
    )
}