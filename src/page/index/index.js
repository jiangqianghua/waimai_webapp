import React from 'react';
import ReactDom from 'react-dom'

import {Provider} from 'react-redux';

import Main from './Main/main.jsx';

import store from './store.js';

ReactDom.render(
		<Provider store={store}><Main /></Provider>,
		document.getElementById('root')
	);