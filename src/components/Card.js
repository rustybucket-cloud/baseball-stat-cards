import { useState, useEffect } from 'react';

function Card(props) {
    const [ stats, setStats ] = useState(null);

    const name = props.player.name_display_first_last;
    const id = props.player.player_id;
    const position = props.player.position_txt;
    const photo = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${id}/headshot/silo/current`;

    useEffect(() => {
        if (position !== 'P') {
            fetch(`https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${id}'&game_type='R'&league_list_id='mlb'`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c90b245b31msh46b59787848177ap15892cjsne103b05ba7a8",
                "x-rapidapi-host": "mlb-data.p.rapidapi.com"
            }
            })
                .then(response => response.json())
                .then(data => {
                    const statList = data.sport_career_hitting.queryResults.row;
                    if (statList) {
                        setStats({g: statList.g, avg: statList.avg, h: statList.h, hr: statList.hr, slg: statList.slg})
                    }
                })
        }
    })

    const handleClick = ({currentTarget}) => {
        currentTarget.classList.toggle('is-flipped');
    }

    return (
            <div className="scene col-sm-4 col-md-3 mx-auto mx-xs-auto p-0">
                <div className="card" onClick={handleClick}>
                    <div className="card__face rsAbsoluteEl card__face--front d-flex flex-column justify-content-between align-items-center" style={{backgroundColor: `${props.colors.background}`}}>
                        <h3>{name}</h3>
                        <img src={photo} style={{width: '4em', height: 'auto'}}/>
                        <p className="text-center">{position}</p>
                    </div>
                    <div className="card__face card__face--back " style={{backgroundColor: `${props.colors.letter}`}}><div><p>Hi,I'm here on the back</p></div></div>
                </div>
            </div>
        );
}

export default Card;