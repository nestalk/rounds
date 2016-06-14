import React from 'react';
import {connect} from 'react-redux';

import Round from './round';

const roundList = ({
    rounds,
    bars
}) => {
    return (
        <div>
            <h3>Previous Rounds</h3>
            <div className="rounds">
                {rounds.map(r => (
                    <Round
                        key={r.id}
                        round={r}
                        bar={bars[r.bar_id]}
                    />))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    rounds: state.rounds,
    bars: state.bars.list
});

export default connect(mapStateToProps, null)(roundList);
