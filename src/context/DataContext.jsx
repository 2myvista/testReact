import {createContext, useState, useEffect} from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {


	const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam'))|| "TeamB");

	const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList'))||[
		{id:1,fullName:"bob jack", destignation: "JS dev", gender:"male", teamName:"TeamA" },
		{id:2,fullName:"Alen X", destignation: "JS dev", gender:"female", teamName:"TeamA" },
		{id:3,fullName:"Kris U", destignation: "JS chief", gender:"female", teamName:"TeamB" },
		{id:4,fullName:"4bob j", destignation: "JS dev", gender:"male", teamName:"TeamC" }
	])

	useEffect(()=>{
		localStorage.setItem('employeeList', JSON.stringify(employees))

	},[employees]);

	useEffect(()=>{
		console.log(selectedTeam);
		localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))

	},[selectedTeam]);

	function handleTeamSelectionChange(event) {
		//console.log(event.target.value);
		setTeam(event.target.value);
	}

	function handleEmployeeCardClick(event) {
		console.log(selectedTeam);
		const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
			?(employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee,teamName:selectedTeam}:employee);
		console.log(transformedEmployees);
		setEmployees(transformedEmployees);
	}

	return <DataContext.Provider value={{
		employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick, setTeam
	}}>
		{children}
	</DataContext.Provider>



}

export default DataContext;