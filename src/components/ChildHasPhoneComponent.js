import React from 'react';
import _ from "lodash";
import TableHeadersComponent from '../components/TableHeadersComponent';

const ChildHasPhoneComponent = ({ childHasPhone, tableHeaders, tableRowKey, tableChildKey, onClickRemovePhone }) => {
	const hasPhoneConfirm = childHasPhone.kids && childHasPhone.kids.has_phone && childHasPhone.kids.has_phone.records ? childHasPhone.kids.has_phone.records : null;
	const childHasPhoneView = _.map(hasPhoneConfirm, (phone, i) => {
		const hasPhoneItem = _.map(phone.data, (item, k) => {
			return (
				<td className="table-cell" key={k}>{item}</td>
			)
		});

		if (hasPhoneConfirm !== null && hasPhoneItem.length !== 0) {
			return (
				<tr key={i}>
					{hasPhoneItem}
					<td className="table-cell delete-cell" onClick={(ev) => onClickRemovePhone(tableRowKey, tableChildKey, i)}></td>
				</tr>
			)
		}
		return null
	});

	if (childHasPhoneView !== null && childHasPhoneView.some(item => item !== null)) {
		return (
			<tr className="table-row hasphone-table">
				<td className="table-cell" colSpan="12">
					<table className="table-relatives-phone table-child">
						<TableHeadersComponent
							tableHeaders={tableHeaders}
						/>
						<tbody>
							{childHasPhoneView}
						</tbody>
					</table>
				</td>
			</tr>
		)
	}
	return null
}

export default ChildHasPhoneComponent;