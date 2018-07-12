import React from 'react';
import _ from "lodash";
import TableChildContainer from '../containers/TableChildContainer';
import TableHeadersComponent from './TableHeadersComponent';

const TableRowComponent = ({ tableRow, tableRowKey, onClick, stateClick, onClickRemove, relativesHeaders }) => {
	const tableRowView = _.map(tableRow.data, (item, i) => {
		return (
			<td className="table-cell" key={i}>{item}</td>
		)
	});

	const hasRelatives = tableRow.kids && tableRow.kids.has_relatives ? tableRow.kids.has_relatives.records : null;
	const tableRelatives = _.map(hasRelatives, (kids, i) => {
		if (hasRelatives !== null && kids.length !== 0) {
			return (
				<TableChildContainer tableChild={kids} tableChildKey={i} tableRowKey={tableRowKey} key={i} />
			)
		}
		return null
	});

	if (tableRowView.length !== 0) {
		let addArrow = tableRelatives.some(item => item !== null) ? 'arrow-cell' : '';

		return (
			<tbody className="table-body parent">
				<tr className={'table-row ' + stateClick} onClick={(ev) => onClick(ev)}>
					<td className={'table-cell '+ addArrow}></td>
					{tableRowView}
					<td className="table-cell delete-cell" onClick={(ev) => onClickRemove(ev, tableRowKey)}></td>
				</tr>
				{tableRelatives.some(item => item !== null) &&
					<tr className="table-row relatives-table">
						<td className="table-cell" colSpan="12">
							<table className="table-relatives table-child">
								<TableHeadersComponent 
									tableHeaders={relativesHeaders}
								/>
								{tableRelatives}
							</table>
						</td>
					</tr>
				}
			</tbody>
		)
	}
	return null
}

export default TableRowComponent;