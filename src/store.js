import { configureStore } from '@reduxjs/toolkit'; // step 2
import serversReducer from './slices/serversSlice'; // step 12

// step 3
export default configureStore({
    // step 4 add reducer key with value an object containing all the reducers
    reducer: {
        // step 13 declare the newly created reducer
        servers: serversReducer
    }
});