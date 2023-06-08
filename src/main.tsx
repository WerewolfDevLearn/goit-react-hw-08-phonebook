import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
