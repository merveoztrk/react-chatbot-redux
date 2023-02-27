import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot( document.getElementById( 'root' ) )
root.render(
  <React.StrictMode>
    <Provider store={ store }> {/*3-Tüm redux yapısına ulaşabilmek için ana componentimizi provider ile sararız store'u buradan alırız */ }
      <App />
    </Provider>
  </React.StrictMode>
);


