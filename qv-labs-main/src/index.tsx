import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import {MoralisProvider} from 'react-moralis';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <MoralisProvider appId="22YES0f3w4FxoHM2P6cZqr1vC9X50wku4WQMTPtP"
                                 serverUrl="https://ecgf1mtmejfz.usemoralis.com:2053/server">
                    <App/>
                </MoralisProvider>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
