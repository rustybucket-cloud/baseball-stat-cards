import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import teams from '../teamInfo';

function CardsList() {
    const team = useSelector(state => state);
    const [ roster, setRoster ] = useState([]);

    useEffect(() => {
        teams.forEach((i) => {
            if (i.team === team) {
                fetch(`https://mlb-data.p.rapidapi.com/json/named.roster_40.bam?team_id='${i.id}'`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "c90b245b31msh46b59787848177ap15892cjsne103b05ba7a8",
                        "x-rapidapi-host": "mlb-data.p.rapidapi.com"
                    }
                })
                .then(response => response.json)
                .then(data => {
                    setRoster(data.queryResults.row);
                })
            }
        })
    }, [])
    return (
        roster.map( player => {
            return <li>{player.name_display_first_last}</li>
        })
    );
}

export default CardsList;