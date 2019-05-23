import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './ClockWithoutHooks';
import ClockWithCustomHook from './ClockWithCustomHook';

const element = (
    <>
        <Clock />
        <App />
        <ClockWithCustomHook />
    </>
)

ReactDOM.render(element, document.getElementById('root'));


