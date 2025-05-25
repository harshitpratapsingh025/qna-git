// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import authReducer from './slices/authSlice';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Configure the Redux store with the middleware
const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
