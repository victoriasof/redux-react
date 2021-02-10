import React from 'react';
import { useSelector } from 'react-redux';
import { selectServers } from '../slices/serversSlice';

const ServersList = () => {
    const servers = useSelector(selectServers);
    console.log(servers);

    return (
        <div>
            <h2>Servers</h2>
        </div>
    )
};

export default ServersList;
