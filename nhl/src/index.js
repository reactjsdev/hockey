import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TableJoueurs from './joueurs/joueurs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TableJoueurs />, document.getElementById('root'));
registerServiceWorker();
