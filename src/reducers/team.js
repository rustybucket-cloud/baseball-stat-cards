const team = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_TEAM':
            return action.payload;
        break;
        default:
            return state;
        break;
    }
}

export default team;