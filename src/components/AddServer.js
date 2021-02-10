import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addServer } from '../slices/serversSlice';

const AddServer = () => {

    const dispatch = useDispatch();
    const [serverName, setServerName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addServer(serverName));
    }

    const handleChange = e => {
        setServerName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={serverName} onChange={handleChange} placeholder="Server name" />
            <input type="submit" value="Add server"/>
        </form>
    )
};

export default AddServer;
