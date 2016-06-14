import {ActionTypes} from '../constants';

const initialState = {
    allPrices: [],
    barPrices: {},
    ids: [],
    roundPrice: 0
};

const calculateRoundPrice = (ids, prices) => {
    const list = ids
        .map(i => prices[i])
        .filter(p => p.count > 0);
    if (list.length === 0) {
        return 0;
    }

    return list
        .map(p => p.current_price * p.count)
        .reduce((a, b) => {
            return a + b;
        });
};

const pricesReducer = (state = initialState, action) => {
    let priceList;
    switch (action.type) {
        case ActionTypes.PRICE_LIST_SUCCESS:
            return {allPrices: action.prices, barPrices: []};
        case ActionTypes.BAR_SELECTED:
            priceList = {};
            var idList = [];
            state.allPrices.filter(p => p.bar_id === action.id).forEach(p => {
                priceList[p.product_id] = {...p, count: 0};
                idList.push(p.product_id);
            });
            return {
                ...state,
                barPrices: priceList,
                ids: idList,
                roundPrice: 0
            };
        case ActionTypes.SAVE_ROUND_SUCCESS:
            priceList = {};
            state.ids.forEach(i => {
                priceList[i] = {...state.barPrices[i], count:0};
            });

            return {
                ...state,
                roundPrice: 0,
                barPrices: priceList
            };
        case ActionTypes.COUNT_CHANGED:
            var newPrices = state.barPrices;
            newPrices[action.id] = {...newPrices[action.id], count: action.count};
            var roundPrice = calculateRoundPrice(state.ids, newPrices);
            return {...state, roundPrice: roundPrice, barPrices: newPrices};
        default:
            return state;
    }
};

export default pricesReducer;
