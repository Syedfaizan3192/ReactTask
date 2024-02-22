import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/UserSlice'; // adjust the path

const store = configureStore({
    reducer: {
        user: userReducer,
        // Add other reducers as needed
    },
    // Add middleware or other store configuration here if needed
});

export default store;