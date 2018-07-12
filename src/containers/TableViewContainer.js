import React, { Component } from 'react';
import TableViewComponent from '../components/TableViewComponent';
import TableHeaderContainer from '../containers/TableHeaderContainer';
import { removeFilter } from '../actions';
import { connect } from 'react-redux';

class TableViewContainer extends Component {
	constructor(props) {
		super(props);
		this.removeFilterHandle = this.removeFilterHandle.bind(this);
	}

	removeFilterHandle(ev, parentIndex) {
		ev.preventDefault();
		ev.stopPropagation();

		const { removeFilter } = this.props;
		removeFilter(parentIndex)
	}

	render() {
		return (
			<table className="table">
				<TableHeaderContainer />
				<TableViewComponent 
					tableView={this.props.tableData.state.removeItem}
					onClickRemove={this.removeFilterHandle}
				/>
			</table>
		)
	}
}

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps, { removeFilter })(TableViewContainer);