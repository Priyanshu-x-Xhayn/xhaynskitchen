import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
const appStore = configureStore({
    reducer: {
        cart: cartReducer // Add your cartSlice reducer here
    }
});

export default appStore;
