import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';

const barSelection= ({
    bars,
    selectedId,
    selectBar,
    ids
}) => {
    return (
        <select value={selectedId} onChange={(e) => selectBar(e.target.value)}>
            <option>-- Select Bar --</option>
            {ids.map(b => bars[b]).map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
            ))}
        </select>
    );
};

const mapStateToProps = (state) => ({
    bars: state.bars.list,
    ids: state.bars.ids,
    selectedId: state.bars.selectId
});

const mapDispatchToProps = (dispatch) => ({
    selectBar: (id) => dispatch(Actions.selectBar(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(barSelection);
