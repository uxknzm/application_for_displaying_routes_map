import { combineReducers, configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import routes from './slices/routesSlice';
import rootSaga from '../sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = combineReducers({
    routes,
})

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

sagaMiddleware.run(rootSaga);

export default store;