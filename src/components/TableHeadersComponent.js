import React from 'react';
import _ from "lodash";

const TableHeadersComponent = ({ tableHeaders }) => {
	const tableHeader = _.map(tableHeaders, ( item, k ) => {
		return <th className="table-cell" key={k}>{item}</th>
	});

	return (
		<thead className="table-head">
			<tr className="table-row">
				<th className="table-empty-cell"></th>
				{tableHeader}
				<th className="table-empty-cell"></th>
			</tr>
		</thead>
	)
}

export default TableHeadersComponent;