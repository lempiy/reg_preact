import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../util';
import reduce from '../reducers';
import * as actions from '../actions/todo/creators';
import img from '../assets/dt.png';
import img2 from '../assets/domino.jpg';
import RegForm from '../components/reg-form'


@connect(reduce, bindActions(actions))
export default class App extends Component {
	render({ todos }, { text }) {
		return (
			<div class="outlet">
                <aside class='logos'>
                    <div class='flex-cell'>
                        <img src={img} alt="Dragon Tail logo"></img>
                    </div>
                    <div class='flex-cell'>
                        <img src={img2} alt="Companies logo"></img>
                    </div>
                </aside>
                <RegForm/>
            </div>
		);
	}
}
