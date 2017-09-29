import { createStore } from 'redux';
import actionTypes from './actions/action_types';
import ACTIONS, {INITIAL} from './actions';

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());
