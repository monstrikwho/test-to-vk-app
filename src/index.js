import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.sass'
import registerServiceWorker from './sw';

import bridge from '@vkontakte/vk-bridge';

// Init VK App
bridge.send('VKWebAppInit');

// Service Worker For Cache
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
