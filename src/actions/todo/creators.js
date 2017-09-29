import actionTypes from '../action_types'

export function addTodo(text) {
	return {
		type: actionTypes.todo.add,
		text
	};
}

export function removeTodo(todo) {
	return {
		type: actionTypes.todo.remove,
		todo
	};
}
