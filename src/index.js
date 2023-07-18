import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
