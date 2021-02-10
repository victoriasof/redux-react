import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'; // step 5 Import configured store
import { Provider } from 'react-redux'; // step 6 import Provider component


ReactDOM.render(
  <React.StrictMode>
      {/* Step 7: Wrap all the components inside the Provider component. 
        In order for them to have access to the store (global state) */}
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
