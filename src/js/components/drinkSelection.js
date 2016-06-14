import React from 'react';

const drinkSelection = ({
    price,
    drink,
    countChanged
}) => {
    return (
        <tr >
            <td>{drink.name}</td>
            <td>£{price.current_price}</td>
            <td>
                <input type="number" value={price.count} onChange={(e) => countChanged(price.product_id, e.target.value)}/>
            </td>
        </tr>
    );
};

export default drinkSelection;
