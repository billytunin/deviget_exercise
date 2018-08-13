import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

if(window.innerWidth < 768){
  window.mobile_mode_activated = true;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
