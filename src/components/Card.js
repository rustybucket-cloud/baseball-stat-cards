function Card(props) {
    const name = props.player.name_display_first_last;
    const id = props.player.player_id;
    const position = props.player.position_txt;
    const photo = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${id}/headshot/silo/current`;

    /*const fetchStats = (id, position) => {
        let stats = {};
        if (position !== 'Pitcher') {
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
                        stats = {g: statList.g, avg: statList.avg, h: statList.h, hr: statList.hr, slg: statList.slg}
                    })
        }
        return stats;
    }*/
    //const { g, avg, h, hr, slg } = fetchStats(id, position);

    return (
        <p>{name}</p>
    );
}

export default Card;