const roster = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_ROSTER':
            return action.payload;
        break;
        default:
            return state;
        break;
    }
}

export default roster;