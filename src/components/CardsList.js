import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import teams from '../teamInfo';
import Card from './Card';

function CardsList() {
    const store = useSelector(state => state);
    const [ roster, setRoster ] = useState([]);

    useEffect(() => {
        teams.forEach((i) => {
            if (i.team === store.team) {
                fetch(`https://mlb-data.p.rapidapi.com/json/named.roster_40.bam?team_id='${i.id}'`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "c90b245b31msh46b59787848177ap15892cjsne103b05ba7a8",
                        "x-rapidapi-host": "mlb-data.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setRoster(data.roster_40.queryResults.row)
                })
            }
        })
    }, [store.team])

    return (
        <div>
            {roster.map( (i) => {
                return <Card player={i} />
            })}
        </div>
    );
}

export default CardsList;