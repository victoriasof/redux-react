import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: '',
    reducers: {
        changeMessage: (state, action) => {
            state = action.payload;
            // Whenever the initialState in not an array or object 
            // always return state; inside each reducer
            return state;
        }
    }
});

export const { changeMessage } = alertSlice.actions;

export const selectMessage = state => state.alert;

export const changeMessageAsync = title => dispatch => {
    setTimeout(() => {
        dispatch(changeMessage(title));
    }, 2000);
};

export default alertSlice.reducer;