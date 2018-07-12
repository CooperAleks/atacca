// import { tableDataRef, tableDataHeaders } from "../config/firebase";
import { FETCH_DATA, REMOVE_DATA_PARENT, REMOVE_DATA_RELATIVES, REMOVE_DATA_PHONE, FETCH_DATA_HEADERS, FETCH_HEADERS_RELATIVES, FETCH_HEADERS_RELATIVES_PHONE } from "./types";
import mainData from '../data';

export const fetchTableData = () => async dispatch => {
	dispatch({
		type: FETCH_DATA,
		payload: mainData
	});
};

export const removeFilter = (parentKey) =>  {
	return {
		type: REMOVE_DATA_PARENT,
		parentKey
	}
};

export const removeFilterRelatives = (parentKey, relativeKey) =>  {
	return {
		type: REMOVE_DATA_RELATIVES,
		parentKey,
		relativeKey
	}
};

export const removeFilterPhone = (parentKey, relativeKey, phoneKey) =>  {
	return {
		type: REMOVE_DATA_PHONE,
		parentKey,
		relativeKey,
		phoneKey
	}
};

export const fetchTableHeaders = () => async dispatch => {
	dispatch({
		type: FETCH_DATA_HEADERS,
		payload: Object.keys(mainData[0].data)
	});
};

export const fetchHeadersRelatives = () => async dispatch => {
	dispatch({
		type: FETCH_HEADERS_RELATIVES,
		payload: Object.keys(mainData[0].kids.has_relatives.records[0].data)
	});
};

export const fetchHeadersRelativesPhone = () => async dispatch => {
	dispatch({
		type: FETCH_HEADERS_RELATIVES_PHONE,
		payload: Object.keys(mainData[0].kids.has_relatives.records[0].kids.has_phone.records[0].data)
	});
};