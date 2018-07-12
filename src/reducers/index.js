import { combineReducers } from "redux";
import tableData from './dataReducer';
import tableHeaders from './headersReducer';
import relativesHeaders from './relativesHeadersReducer';
import relativesPhoneHeaders from './relativesPhoneHeadersReducer';
import removeItem from './removeReducer';

export default combineReducers({
	tableData,
	tableHeaders,
	relativesHeaders,
	relativesPhoneHeaders,
	removeItem
});