import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './layouts/app';
import './style';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './style/vendor/icon.css';

render((
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
), document.body);
