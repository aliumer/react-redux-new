import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import reduxImmutableStateInvariat from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    // this is to add support for redux dev tools in browser.
    const composeEnhancers =
        window.__REDUC_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariat()))
    );
}
