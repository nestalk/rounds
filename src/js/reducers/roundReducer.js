import {ActionTypes} from '../constants';

const initialState=[];

const roundReducer = (state=initialState, action) => {
    switch(action.type){
        case ActionTypes.SAVE_ROUND_SUCCESS:
            const newRound = {
                ... action.round,
                drinks: action.drinks,
                cost: action.drinks.map(d => d.actual_price).reduce((a,b)=> a+b)
            };
            return [...state, newRound];
        default: 
            return state;
    }
};

export default roundReducer;
