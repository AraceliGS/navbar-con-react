import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppArtista from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppArtista />, document.getElementById('root'));
registerServiceWorker();
