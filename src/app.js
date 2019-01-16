//three steps to using npm modules. 1.Install 2.Import 3.Use
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Main from './components/Main';
import data from './components/data';
ReactDOM.render(<Main />, document.getElementById('app'));





