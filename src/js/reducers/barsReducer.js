import {ActionTypes} from '../constants';

const initialState = {
    list: {},
    ids: [],
    selectedId: ''
};

const barsReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.BAR_LIST_SUCCESS:
            var barList = {};
            var idList = [];
            action.bars.forEach(b => {
                barList[b.id] = b;
                idList.push(b.id);
            });            
            return {... state, list:barList, ids: idList};
        case ActionTypes.BAR_SELECTED:
            return {... state, selectedId: action.id};
        default:
            return state;
    }
};

export default barsReducer;
