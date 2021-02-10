import { createSlice } from '@reduxjs/toolkit'; // step 8

// step 9
export const serversSlice = createSlice({
    name: 'servers',
    initialState: [],
    reducers: {
        addServer: (state, action) => {
            // Here i make changes to the state like this.setState() in Class Components
            // I dont care if i mutate objects because Redux uses 
            // Immer library that handles that in the background
            state.push(action.payload);
        }
    }
});

// step 10
// export const addServer = serversSlice.actions.addServer;
export const { addServer } = serversSlice.actions;

// This is called selector it returns some part of the state
export const selectServers = state => state.servers;

// step 11
export default serversSlice.reducer;