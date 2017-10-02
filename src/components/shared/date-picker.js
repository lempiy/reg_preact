import { h, Component } from 'preact';
const mdDateTimePicker = require("md-date-time-picker");

const createDatePicker = (input, config) => {
	const dialog = new mdDateTimePicker.default(config);

	dialog.trigger = input

	input.addEventListener('onOk', function() {
		this.parentNode.classList.add("is-dirty");
		this.value = dialog.time.format("YYYY-MM-DD");
	});

	return dialog
}

export default class DatePicker extends Component {
	shouldComponentUpdate({ input }) {
		return input !== this.props.input;
	}
	
	componentDidMount() {
		this.dialog = createDatePicker(this.inpEl, {
			type: 'date',
			orientation: 'PORTRAIT',
			future: moment().add(10, 'years')
		});
		componentHandler.upgradeElement(this.el)
	}

	render({ input, title, name, error }) {
		return (
			<div ref={(el) => { this.el = el; }} class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input ref={(inpEl) => { this.inpEl = inpEl; }} class="mdl-textfield__input"  value={input} type="text" pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$" id={name} name={name}/>
				<label onClick={(e) => this.dialog ? this.dialog.toggle() : null} class="datepicker-label" for={name}>
					<i class="material-icons">event</i>
				</label>
				<label class="mdl-textfield__label" for={name}>{title}</label>
				<span class="mdl-textfield__error">
					{error}
				</span>
			</div>
		);
	}
}
