const team = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_TEAM':
            return action.payload;
        break;
    }
}

export default team;