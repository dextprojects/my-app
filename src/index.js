import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudnetInfoForm from './components/StudentInfoForm.jsx';
import registerServiceWorker from './registerServiceWorker';
import StudentTable from './components/StudentTable.jsx'

ReactDOM.render( < StudnetInfoForm / > , document.getElementById('root'));
registerServiceWorker();
