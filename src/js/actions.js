import {ActionTypes} from './constants';
import * as Api from './api';

export const initialise = () => (dispatch) => {
    return Promise.all([
        dispatch(Api.getBarList()),
        dispatch(Api.getProductList()),
        dispatch(Api.getPriceList())
    ]);
};

export const barListSuccess = (bars) => ({
    type: ActionTypes.BAR_LIST_SUCCESS,
    bars
});

export const productListSuccess = (products) => ({
    type: ActionTypes.PRODUCT_LIST_SUCCESS,
    products
});

export const priceListSuccess = (prices) => ({
    type: ActionTypes.PRICE_LIST_SUCCESS,
    prices
});

export const selectBar = (id) => ({
    type: ActionTypes.BAR_SELECTED,
    id
});

export const countChanged = (id, count) => ({
    type: ActionTypes.COUNT_CHANGED,
    id,
    count: parseInt(count, 10)
});

export const saveRound = (barId, ids, prices) => (dispatch) => {
    dispatch({type: ActionTypes.SAVE_ROUND});
    const newRound= [];
    const drinkCounts = ids.map(i => prices[i]).filter(p => p.count>0);
    drinkCounts.forEach(d => {
        for(var i=0; i<d.count;i++){
            newRound.push({product_id: d.product_id,actual_price: d.current_price});
        }
    });
    return dispatch(Api.saveRound(barId, newRound));
};

export const saveRoundSuccess = ({round, drinks}) => ({
    type: ActionTypes.SAVE_ROUND_SUCCESS,
    round,
    drinks
});
