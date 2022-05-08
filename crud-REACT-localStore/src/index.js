import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';
import{MuiPickersUtilsProvider} from '@material-ui/pickers'
import { StrictMode } from 'react/cjs/react.production.min';
import DateFnsUtils from '@date-io/date-fns';
ReactDOM.render(
  <StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <App />
  </MuiPickersUtilsProvider>
  </StrictMode>,
  document.getElementById('root')
);
