import { h, Component } from 'preact';

export default class RegForm extends Component {
	render() {
		return (
			<form onsubmit="return false" className="regist-driver">
			<h1 className="driver-reg-title">Driver Registration</h1>
			<div id="app" className="reg-container">
				<div className="content-left">
                </div>
                <div className="content-center">

                </div>
                <div className="content-right">

                </div>
            </div>
            </form>
		);
	}
}
