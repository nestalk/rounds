import * as Actions from './actions';
import faker from 'faker/locale/en_GB';

const fakeBar = () => ({
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    lat: 0,
    long: 0,
    image_url: faker.image.nightlife()
});

const fakeProduct = () => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    image_url: faker.image.food()
});

const bars = [fakeBar(), fakeBar(), fakeBar()];
const products = [fakeProduct(), fakeProduct(), fakeProduct(),fakeProduct(),fakeProduct(),fakeProduct(),fakeProduct()];
const prices = bars.map(b => {
    return products.map(p =>({
        bar_id: b.id,
        product_id: p.id,
        current_price: Math.round((Math.random()*5)+5)
    })
    );
}).reduce((a,b) => a.concat(b));

// Get request for list of bars
export const getBarList = () => (dispatch) => {
    return dispatch(Actions.barListSuccess(bars));
};

// Get request for list of products
export const getProductList = () => (dispatch) => {
    return dispatch(Actions.productListSuccess(products));
};

// get request for list of prices
export const getPriceList = () => (dispatch) => {
    return dispatch(Actions.priceListSuccess(prices));
};

// post request, sends bar id and list of drinks ordered
// returns round object and the saved list drinks
export const saveRound = (barId, newRound) => (dispatch) => {
    const round = {
        id: faker.random.uuid(),
        bar_id: barId,
        ordered_at: new Date()
    };
    
    const savedRound = newRound.map(r => ({
        id: faker.random.uuid(),
        round_id: round.bar_id,
        product_id: r.product_id,
        actual_price: r.actual_price
    }));
    
    return dispatch(Actions.saveRoundSuccess({round: round, drinks: savedRound}));
};
