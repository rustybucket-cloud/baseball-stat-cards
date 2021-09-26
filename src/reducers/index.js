import { combineReducers } from 'redux';

import team from './team';
import roster from './roster';

const Reducers = combineReducers({
    team, roster
});

export default Reducers;