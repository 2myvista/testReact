import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";
import {useContext} from "react";
import DataContext from "./context/DataContext";

const TeamMemberCard = ({employee})=> {
	const {handleEmployeeCardClick, selectedTeam} = useContext(DataContext);

	return (
		<div key={employee.id} id={employee.id} onClick={handleEmployeeCardClick} className={(employee.teamName === selectedTeam ? 'card m-2 standout':'card m-2')} style={{cursor: "pointer"}}>
			{(employee.gender==='male')?
				<img src={maleProfile} className="card-img-top"/>
				:<img src={femaleProfile} className="card-img-top"/>
			}
			<div className="card-body">
				<h5 className="card-title">Full Name: {employee.fullName}</h5>

				<p className="card-text"><b>Destignation</b> {employee.destignation}</p>
				<p className="card-text">Team: {employee.teamName}</p>
			</div>
		</div>

	)
}
export default TeamMemberCard;

