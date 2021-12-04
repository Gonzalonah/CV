import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

import time from './time.js';
import nav from './nav.js';

import './index.css';
import './nav.css';


ReactDOM.render(
    <h1 id="time">🖐Hola🤙</h1>,
    document.getElementById('app')
);

time();
nav();