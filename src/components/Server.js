import React from 'react';

const Server = (props) => {
    //const server = props.server;
    const { server, handleDelete, handleToggle, handleAlert } = props;

    return (
        <p>{server.title} &nbsp;
            {server.status ? "online" : "offline" /* ternary operator*/} &nbsp;
            <button onClick={() => handleToggle(server.id)}>Toggle Status</button>
            <button onClick={() => handleDelete(server.id)}>Delete Server</button>
            <button onClick={() => handleAlert(server.title)}>Alert</button>
        </p>
    );
};

export default Server;