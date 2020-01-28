import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './componentes/Body.css'

ReactDOM.render(<App className={Body} />, document.getElementById('root'))