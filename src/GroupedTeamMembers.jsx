import {useState, useContext} from "react";
import DataContext from "./context/DataContext";

const GroupedTeamMembers = () => {
	const {employees, selectedTeam, setTeam} = useContext(DataContext)
	const [groupedEmployees, setGroupedData] = useState(GroupTeamMembers());

	function GroupTeamMembers() {
		var teams = [];

		var teamAMemders = employees.filter((employee)=> employee.teamName==='TeamA');
		var teamA = {team:'TeamA',members:teamAMemders,collapsed:selectedTeam === 'TeamA'?false:true};
		teams.push(teamA);

		var teamBMemders = employees.filter((employee)=> employee.teamName==='TeamB');
		var teamB = {team:'TeamB',members:teamBMemders,collapsed:selectedTeam === 'TeamB'?false:true};
		teams.push(teamB);
		var teamCMemders = employees.filter((employee)=> employee.teamName==='TeamC');
		var teamC = {team:'TeamC',members:teamCMemders,collapsed:selectedTeam === 'TeamC'?false:true};
		teams.push(teamC);

		return teams;

	}


	function handleTeamClick (event) {
		console.log(event.currentTarget.id);

		// вариант со скрытием/открытием каждой грунны поотдельности
		/*var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);*/

		// вариант с аккордеоном
		var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: false } : { ...groupedData, collapsed: true });


		setGroupedData(newGroupedData);
		setTeam(event.currentTarget.id);
	}

	return (
		<main className="container">
			{
				groupedEmployees.map((item) => {
					return (
						<div key={item.team} className='card mt-2' style={{cursor: "pointer"}}>
							<h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick }>
								Team name: {item.team}
							</h4>
							<div id={"collapse"+item.team} className={item.collapsed===true?"collapse":""}>
								<hr/>
								{
									item.members.map(member => {
										return (
											<div key={member.id} className="mt-2">
												<h5 className="card-title mt-2">
													<span className="text-dark">Full name: {member.fullName}</span>
												</h5>
												<p>destignation: {member.destignation}</p>
											</div>

										);
									})
								}
							</div>
						</div>
					)
				})
			}
		</main>
	)
}
export default GroupedTeamMembers;