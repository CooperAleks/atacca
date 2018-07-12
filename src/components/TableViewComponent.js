import React from 'react';
import _ from "lodash";
import TableRowContainer from '../containers/TableRowContainer';


const TableViewComponent = ({ tableView, onClickRemove }) => {
	const tableViewParent = _.map(tableView, (view, i) => {
		return (
			<TableRowContainer
				tableRow={view}
				tableRowKey={i}
				key={i}
				onClickRemove={onClickRemove}
			/>
		)
	});

	if (tableViewParent !== null) {
		return	tableViewParent
	}
	return null
}

export default TableViewComponent;