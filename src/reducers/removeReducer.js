import	{ REMOVE_DATA_PARENT, REMOVE_DATA_RELATIVES, REMOVE_DATA_PHONE } from '../actions/types';
import mainData from '../data';

export default function reducer(state = mainData, action = {}) {
	switch (action.type) {
		case REMOVE_DATA_PARENT:
			return {
				...state,
				[action.parentKey]: [...state[action.parentKey]]
				.filter((item, index) => index !== action.parentKey)
			};
		case REMOVE_DATA_RELATIVES:
			return {
				...state,
				[action.parentKey]: {
				...state[action.parentKey],
					kids: {
					...state[action.parentKey].kids,
						has_relatives: {
						...state[action.parentKey].kids.has_relatives,
							records: {
							...state[action.parentKey].kids.has_relatives.records,
								[action.relativeKey]: [...state[action.parentKey].kids.has_relatives.records[action.relativeKey]]
								.filter((item, index) => index !== action.relativeKey)
							}
						}
					}
				}
			};
		case REMOVE_DATA_PHONE:
			return {
				...state,
				[action.parentKey]: {
				...state[action.parentKey],
					kids: {
					...state[action.parentKey].kids,
						has_relatives: {
						...state[action.parentKey].kids.has_relatives,
							records: {
							...state[action.parentKey].kids.has_relatives.records,
								[action.relativeKey]: {
								...state[action.parentKey].kids.has_relatives.records[action.relativeKey],
									kids: {
									...state[action.parentKey].kids.has_relatives.records[action.relativeKey].kids,
										has_phone: {
										...state[action.parentKey].kids.has_relatives.records[action.relativeKey].kids.has_phone,
											records: {
											...state[action.parentKey].kids.has_relatives.records[action.relativeKey].kids.has_phone.records,
												[action.phoneKey]: [...state[action.parentKey].kids.has_relatives.records[action.relativeKey].kids.has_phone.records[action.phoneKey]]
												.filter((item, index) => index !== action.phoneKey)
											}
										}
									}
								}
							}
						}
					}
				}
			};
		default:
			return state;
	}
}