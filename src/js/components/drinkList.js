import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';

import DrinkSelection from './drinkSelection';

const drinkList = ({
    prices,
    drinks,
    selectedId,
    countChanged,
    priceIds,
    roundPrice,
    saveRound
}) => {
    if (selectedId) {
        return (
            <table>
                <tbody>
                {priceIds.map(p => (
                    <DrinkSelection
                        key={p}
                        price={prices[p]}
                        drink={drinks.get(p)}
                        countChanged={countChanged}
                    />))}
                <tr>
                    <td>Total</td>
                    <td>£{roundPrice}</td>
                    <td>
                        <button onClick={() => saveRound(selectedId, priceIds, prices)}>Save Round</button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
    return <h3>Select Bar</h3>;
};

const mapStateToProps = (state) => ({
    selectedId: state.bars.selectedId,
    prices: state.prices.barPrices,
    drinks: state.products,
    priceIds: state.prices.ids,
    roundPrice: state.prices.roundPrice
});

export default connect(mapStateToProps, Actions)(drinkList);
