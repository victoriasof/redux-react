import React from 'react';
import './App.css';
import { addServer } from './slices/serversSlice';
import { useDispatch } from 'react-redux';
import AddServer from './components/AddServer';
import ServersList from './components/ServersList';

function App() {
  const dispatch = useDispatch();
  
  // const handleAdd = () => {
  //   console.log('clicked button');
  //   dispatch(addServer('server'));
  // }

  return (
    <div className="App">
      App component

      <AddServer />
      <ServersList />

      {/* <button onClick={handleAdd}>Add server</button> */}
    </div>
  );
}

export default App;
