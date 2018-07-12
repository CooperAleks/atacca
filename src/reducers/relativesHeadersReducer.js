import	{ FETCH_HEADERS_RELATIVES } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_HEADERS_RELATIVES:
			return action.payload;
		default:
			return state;
	}
}