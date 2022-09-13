import {useContext} from 'react';
import DataContext from "./context/DataContext";


const Teams = ()=> {
	const {handleTeamSelectionChange, selectedTeam} = useContext(DataContext);

	return (
		<select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
			<option value="TeamA">Team A</option>
			<option value="TeamB">Team B</option>
			<option value="TeamC">Team C</option>
		</select>
	)
}
export default Teams;