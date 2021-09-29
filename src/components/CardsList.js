import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import teams from '../teamInfo';
import Card from './Card';

function CardsList() {
    const store = useSelector(state => state);
    const [ roster, setRoster ] = useState([]);
    const [ colors, setColors ] = useState('');

    useEffect(() => {
        teams.forEach((i) => {
            if (i.team === store.team) {
                setColors(i.color);
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
        <div className="row" style={{maxWidth: '1024px', margin: 'auto'}}>
            {roster.map( (i) => {
                return <Card player={i} colors={colors}/>
            })}
        </div>
    );
}

export default CardsList;