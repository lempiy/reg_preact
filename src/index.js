import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './layouts/app';
import moment from 'moment'; 
import './style';

/* React MDL */
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './style/vendor/icon.css';

/* MDL datepicker */
import './style/vendor/date-fonts.css';
import 'md-date-time-picker/dist/css/mdDateTimePicker.css'

/* MDL selectfield */
import 'mdl-selectfield/dist/mdl-selectfield.min.css'
import 'mdl-selectfield/dist/mdl-selectfield.js';

window.moment = moment

render((
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
), document.body);
