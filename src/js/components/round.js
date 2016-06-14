import React from 'react';
import moment from 'moment';

const round = ({
    round,
    bar
}) => {
    return (
        <div className="round">
            <div>{moment(round.ordered_at).format("DD/MM/YYYY")}</div>
            <div>{bar.name}</div>
            <div>£{round.cost}</div>
        </div>
    );
};

export default round;
