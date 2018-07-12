import	{ FETCH_DATA_HEADERS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_DATA_HEADERS:
			return action.payload || null;
		default:
			return state;
	}
}