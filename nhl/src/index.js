import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './app/App';
import Api from './services/http-service';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Api />, document.getElementById('root'));
registerServiceWorker();
