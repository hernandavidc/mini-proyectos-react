import React from "react";
import ReactDOM from 'react-dom/client';

import { App } from './CreateApp'
import { FirstApp } from "./FristApp";

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App text="Hola mundo" />
        <FirstApp ></FirstApp>
    </React.StrictMode>
)