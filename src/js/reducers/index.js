import {combineReducers} from 'redux';

import bars from './barsReducer';
import products from './productsReducer';
import prices from './pricesReducer';
import rounds from './roundReducer';

const indexReducer = combineReducers({
    bars,
    products,
    prices,
    rounds
});

export default indexReducer;
