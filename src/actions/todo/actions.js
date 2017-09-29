import actionTypes from '../action_types'

export const TODO_INITIAL = {
	todos: []
};

export default {
    [actionTypes.todo.add]: ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	}),
	[actionTypes.todo.remove]: ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	})
}
