// State argument is not application state, only the state
// this reducer is responsible for.
export default function(state = null, action) { // if state is undefined, default is null
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	// state should never mutate. Don't assign values to it.
	// it must always be 'fresh'.
	return state;
}