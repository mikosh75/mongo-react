import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import GuestBook from './GuestBook';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GuestBook />, document.getElementById('root'));
registerServiceWorker();
