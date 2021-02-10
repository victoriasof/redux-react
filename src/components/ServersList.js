import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectServers, toggleStatus, deleteServer } from '../slices/serversSlice';
import { changeMessageAsync, selectMessage } from '../slices/alertSlice';

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
                <p key={server.id}>{server.title} &nbsp;
                    {server.status ? "online" : "offline" /* ternary operator*/} &nbsp;
                    <button onClick={() => handleToggle(server.id)}>Toggle Status</button>
                    <button onClick={() => handleDelete(server.id)}>Delete Server</button>
                    <button onClick={() => handleAlert(server.title)}>Alert</button>
                </p>
            ))}

            <h2>Alert message example for Async code</h2>
            <p>Alert message is: {message}</p>
        </div>
    );
};

export default ServersList;
