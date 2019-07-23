import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'font-awesome/css/font-awesome.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
