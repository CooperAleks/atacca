import React from 'react';
import _ from "lodash";
import ChildHasPhoneContainer from '../containers/ChildHasPhoneContainer';
// import TableHeadersComponent from './TableHeadersComponent';

const TableChildComponent = ({ tableChild, relativeHeaders, tableRowKey, tableChildKey, onClick, stateClick, onClickRemoveRel }) => {
	const tableChildView = _.map(tableChild.data, (child, i) => {
		return (
			<td className="table-cell" key={i}>{child}</td>
		)
	})

	return (
		<tbody className="table-body">
			<tr className={'table-row ' + stateClick} onClick={(e) => onClick(this)}>
				<td className="table-cell arrow-cell"></td>
				{tableChildView}
				<td className="table-cell delete-cell" onClick={ (ev) => onClickRemoveRel(ev, tableRowKey, tableChildKey)}></td>
			</tr>
			
			<ChildHasPhoneContainer
				childHasPhone={tableChild}
				tableChildKey={tableChildKey}
				tableRowKey={tableRowKey}
			/>
		</tbody>
	)
}

export default TableChildComponent;