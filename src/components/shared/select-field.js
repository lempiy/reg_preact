import { h, Component } from 'preact';

export default class SelectFieled extends Component {
    
    componentDidMount() {
        componentHandler.upgradeElement(this.el)
    }

	// remove = () => {
	// 	let { onRemove, todo } = this.props;
	// 	onRemove(todo);
	// };

	render({ title, name, list }) {
		return (
            <div ref={(el) => { this.el = el; }} className="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
                <select className="mdl-selectfield__select" id={name} name={name}>
                    <option value=""></option>
                    {
                        list.map(item =>
                            <option value={item}>{item}</option>
                        )
                    }
                </select>
                <label className="mdl-selectfield__label" for={name}>{title}</label>
            </div>
		);
	}
}
