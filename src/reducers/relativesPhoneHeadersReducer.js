import	{ FETCH_HEADERS_RELATIVES_PHONE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_HEADERS_RELATIVES_PHONE:
			return action.payload;
		default:
			return state;
	}
}