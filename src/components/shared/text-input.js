import { h, Component } from 'preact';

export default class TextInput extends Component {
	shouldComponentUpdate({ input }) {
		return input !== this.props.input;
    }
    
    componentDidMount() {
        componentHandler.upgradeElement(this.el)
    }

	// remove = () => {
	// 	let { onRemove, todo } = this.props;
	// 	onRemove(todo);
	// };

	render({ input, title, name, pattern, error }) {
		return (
			<div ref={(el) => { this.el = el; }} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input className="mdl-textfield__input" pattern={pattern} value={input} type="text" id={name} name={name}/>
				<label className="mdl-textfield__label" for={name}>{title}</label>
                {error && (<span class="mdl-textfield__error">{error}</span>)}
			</div>
		);
	}
}
