import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import configureStore from './configureStore';
import reducer from './reducers';
import '../css/style.css';
import {initialise } from './actions';

import BarSelection from './components/barSelection';
import DrinkList from './components/drinkList';
import RoundList from './components/roundList';

const store = configureStore(reducer);
store.dispatch(initialise());

render(
    <Provider store={store}>
        <section>
            <h1>Rounds</h1>
            <BarSelection />
            <DrinkList />
            <hr/>
            <RoundList />
        </section>
    </Provider>,
    document.getElementById('app')
);
