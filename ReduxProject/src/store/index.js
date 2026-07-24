import { configureStore } from '@reduxjs/toolkit';

import counterRedcuer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {counter: counterRedcuer, auth: authReducer },
});




export default store;