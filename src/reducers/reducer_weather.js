import {FETCH_WEATHER} from '../actions/index'
//reducers all get passed a state object, this targets only the state property they are responsible for
//reducers all get passed an action object from dispatch, that is where all actions are received and passed 

//since we want a list of data (different cities) it makes sense to have the initial state value to be an empty array

export default function (state=[], action) {
    console.log('action received', action);

    switch(action.type) {
        case FETCH_WEATHER:
        return [action.payload.data, ...state];
    }

    return state;
};
