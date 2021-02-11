import { createSlice } from '@reduxjs/toolkit'; // step 8

// step 9
export const serversSlice = createSlice({
    name: 'servers',
    initialState: [], //empty array 
    reducers: {
        addServer: (state, action) => {
            // Here i make changes to the state like this.setState() in Class Components
            // I dont care if i mutate objects because Redux uses 
            // Immer library that handles that in the background
            state.push({
                id: state.length + 1,
                title: action.payload,
                status: false
            });
        },
        toggleStatus: (state, action) => {
            const id = action.payload;
            const index = state.findIndex(server => server.id === id);
            if (index !== -1) {
                state[index].status = !state[index].status;
            }
        },
        deleteServer: (state, action) => {
            const id = action.payload;
            const index = state.findIndex(server => server.id === id);
            state.splice(index, 1);
        }
        // [
        //     {
        //         id: 1,
        //         title: 'Ubuntu',
        //         status: false
        //     },
        //     {
        //         id: 2,
        //         title: 'Ubuntu',
        //         status: false
        //     },
        //     {
        //         id: 3,
        //         title: 'Ubuntu',
        //         status: false
        //     }
        // ]

    }
});

// step 10
// export const addServer = serversSlice.actions.addServer;
export const { addServer, toggleStatus, deleteServer } = serversSlice.actions;

// This is called selector it returns some part of the state
export const selectServers = state => state.servers;

// step 11
export default serversSlice.reducer;