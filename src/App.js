import React, { Component } from 'react';
import './styles/App.css';
import TableViewContainer from './containers/TableViewContainer';
import { fetchTableData, removeFilter } from './actions';
import { connect } from 'react-redux';
import _ from "lodash";

class App extends Component {
	componentWillMount() {
		this.props.fetchTableData();
	}

	removeFilterHandle(parentIndex, action) {
		const { removeFilter } = this.props.state;
		removeFilter({parentIndex, action})
	}

	render() {
		return (
			<div className="App">
				<TableViewContainer 
					tableData={this.props}
					onClickRemove={this.removeFilterHandle}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps, { fetchTableData, removeFilter })(App);