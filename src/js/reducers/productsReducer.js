import {ActionTypes} from '../constants';

const initialState = new Map();

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.PRODUCT_LIST_SUCCESS:
            state = new Map(action.products.map(p => [p.id,p]));
            return state;
        default:
            return state;
    }
};

export default productsReducer;
