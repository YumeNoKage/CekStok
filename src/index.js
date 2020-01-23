import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar/navbar';
// import Data from './components/testimoni/testimoni';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navbar />, document.getElementById('navi'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Data />, document.getElementById('data'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
