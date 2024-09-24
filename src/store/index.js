import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import logger from 'redux-logger';
import {thunk }from 'redux-thunk'
import { rootReducer } from './reducer';

const middleware = [thunk];

const persistConfig = {
    key: 'state',
    storage
}

const persistReducers = persistReducer(persistConfig, rootReducer)
const composedEnchancers = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistReducers, undefined, composedEnchancers)

store.subscribe(() => {
    console.log('Store updated:', store.getState());
  });


export const presistor = persistStore(store);
