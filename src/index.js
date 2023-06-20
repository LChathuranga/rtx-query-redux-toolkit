import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from './features/apiSlice';

const store = configureStore({
  reducer: {

  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);

