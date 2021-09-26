const changeTeam = (team) => {
    return {
        type: 'CHANGE_TEAM',
        payload: team
    }
}

export default changeTeam;