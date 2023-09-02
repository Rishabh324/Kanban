import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Components/Modals/EditCardModal/Popovers/Date/DateRange.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)