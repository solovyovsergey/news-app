import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import newsReducer from './newsReducer';


export * from './interface';

export const store = createStore(
    newsReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
