import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectServers, toggleStatus, deleteServer } from '../slices/serversSlice';
import { changeMessageAsync, selectMessage } from '../slices/alertSlice';
import Server from './Server';

const ServersList = () => {
    const dispatch = useDispatch();
    const servers = useSelector(selectServers);

    const handleToggle = (id) => {
        dispatch(toggleStatus(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteServer(id));
    }

    // handleDelete(2);

    const handleAlert = (title) => {
        dispatch(changeMessageAsync(title));
    }

    const message = useSelector(selectMessage);

    return (
        <div>
            <h2>Servers</h2>
            {servers.map(server => (
                <Server 
                    key={server.id}
                    server={server} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle} 
                    handleAlert={handleAlert} 
                />
            ))}

            <h2>Alert message example for Async code</h2>
            <p>Alert message is: {message}</p>
        </div>
    );
};

export default ServersList;
