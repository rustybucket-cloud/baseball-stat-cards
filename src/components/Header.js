import { useDispatch, useSelector } from 'react-redux';
import changeTeam from '../actions/team';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import teamInfo from '../teamInfo';

function Header() {
    const selected = useSelector(state => state);
    const dispatch = useDispatch();
    const [ teamName, setTeamName ] = useState('');
    const [ teamColor, setTeamColor ] = useState('');
    const [ teamLogo, setTeamLogo ] = useState('');

    const ref = useRef(null);
    
    useEffect(() => {
        dispatch(changeTeam('Arizona Diamondbacks'));
        selectTeam();
    })

    useLayoutEffect(() => {
        ref.current.style.setProperty("color", `${teamColor}`, "important");
      }, []);

    const selectTeam = () => {
        teamInfo.forEach( team => {
            if (team.team === selected) {
                setTeamName(team.team);
                setTeamColor(team.color);
                setTeamLogo(team.logo);
                return;
            }
        });
    }

    return (
        <header style={{backgroundColor: `${teamColor.background}`}} ref={ref} >
            <nav className="navbar navbar-expand-md navbar-dark bg-main row px-5">
                <div className="d-flex flex-row align-items-center">
                    <img className="navbar-brand" src={teamLogo} style={{height: 'auto', width: '3em'}}/>
                    <h1 style={{color: `${teamColor.letter}`}} className="navbar-brand">{teamName}</h1>  
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto ml-auto">
                        <li className="nav-item">
                            <p className="nav-link">Select Team</p>
                        </li>
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