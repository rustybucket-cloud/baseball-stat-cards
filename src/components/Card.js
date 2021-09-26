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

        return (
            <div className="col-sm-4 col-md-3 mx-xs-auto">
                <h3>{name}</h3>
                <img src={photo} />
                <p className="text-center">{position}</p>
            </div>
        );
}

export default Card;