import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {DataProvider} from './context/DataContext'

function App() {


/*
    function handleEmployeeCardClick(event) {
        console.log(selectedTeam);
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
            ?(employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee,teamName:selectedTeam}:employee);
        console.log(transformedEmployees);
        setEmployees(transformedEmployees);
    }
*/



    return (
        <DataProvider>
        <Router>
            <Nav/>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Employees />
                    }>
                </Route>
                <Route path="/GroupedTeammembers" element={<GroupedTeamMembers />}>
                </Route>
                <Route path="*" element={<NotFound/>}>
                </Route>
            </Routes>
            <Footer/>
        </Router>
        </DataProvider>
  );
}

export default App;
