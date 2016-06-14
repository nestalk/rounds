import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function ConfigureStore(rootReducer, initialState) {
    return finalCreateStore(rootReducer, initialState);
}
