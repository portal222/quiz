import React from 'react';
import "./app.css"
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
        number={10}
        title="String from index file"
        text="Text from index file"/>
  </React.StrictMode>
);


