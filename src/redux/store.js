import {rootSaga} from '../redux/saga/index';
import {rootReducer} from '../redux/reducers/rootReducer';


import {createStore,  applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
 
const saga = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(saga),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(rootSaga)