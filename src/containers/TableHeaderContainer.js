import React, { Component } from "react";
import TableHeadersComponent from '../components/TableHeadersComponent';
import _ from "lodash";
import { fetchTableHeaders } from '../actions';
import { connect } from 'react-redux';

class TableHeaderContainer extends Component {
	componentWillMount() {
		this.props.fetchTableHeaders();
	}

	render() {
		return (
			<TableHeadersComponent
				tableHeaders={this.props.state.tableHeaders}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps, { fetchTableHeaders })(TableHeaderContainer);