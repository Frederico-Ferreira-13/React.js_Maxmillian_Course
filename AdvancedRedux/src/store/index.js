import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSilce from './cart-slice';

const store = configureStore({ 
    reducer: { ui: uiSlice.reducer, cart: cartSilce.reducer }})

export default store;