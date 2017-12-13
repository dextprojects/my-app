import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudnetInfoForm from './components/StudentInfoForm';
import registerServiceWorker from './registerServiceWorker';
import studentTable from './components/studentTable.jsx'

ReactDOM.render(<studentTable />, document.getElementById('root'));
registerServiceWorker();
