import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
    reducer: reducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
});

const persister = 'Free';

export { store, persister };
