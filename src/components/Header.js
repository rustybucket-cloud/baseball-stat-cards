import { useDispatch, useSelector } from 'react-redux';
import changeTeam from '../actions/team';
import { useState, useEffect } from 'react';
import teamInfo from '../teamInfo';

function Header() {
    const selectedTeam = useSelector(state => state);
    const dispatch = useDispatch();
    const [ teamName, setTeamName ] = useState('');
    const [ teamColor, setTeamColor ] = useState('');
    const [ teamLogo, setTeamLogo ] = useState('');
    
    useEffect(() => {
        selectTeam('Arizona Diamondbacks');
    }, [])

    const selectTeam = (selected) => {
        dispatch(changeTeam(selected));
        teamInfo.forEach( team => {
            if (team.team === selected) {
                setTeamName(team.team);
                setTeamColor(team.color);
                setTeamLogo(team.logo);
                return;
            }
        });
    }

    const handleClick = ({target}) => {
        const team = target.getAttribute("data-team-name");
        selectTeam(team);
    }

    return (
        <header style={{backgroundColor: `${teamColor.background}`}}>
            <nav className="navbar navbar-expand-md navbar-dark bg-main row px-5">
                <div className="d-flex flex-row align-items-center">
                    <img className="navbar-brand" src={teamLogo} style={{height: '3em', width: 'auto'}}/>
                    <h1 style={{color: `${teamColor.letter}`}} className="navbar-brand">{teamName}</h1>  
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto ml-auto">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor: `${teamColor.letter}`, color: `${teamColor.background}`}}>
                                Select a Team
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {teamInfo.map( (team, i) => {
                                    return <p key={i} className="dropdown-item" data-team-name={team.team} onClick={handleClick}>{team.team}</p>
                                })}
                            </div>
                        </div>
                        <li className="nav-item">
                            <p className="nav-link">Pitchers</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Position Players</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">All Players</p>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Header;