import React, { Component } from 'react';
import _ from "lodash";
import TableChildComponent from '../components/TableChildComponent';
import { removeFilterRelatives } from '../actions';
import { connect } from 'react-redux';

class TableChildContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showChild: false
		}
	}

	removeFilterRelativesHandle(ev, parentIndex, relativeIndex) {
		ev.preventDefault();
		ev.stopPropagation();

		const { removeFilterRelatives } = this.props;
		removeFilterRelatives(parentIndex, relativeIndex)
	}

	toggleClickShow() {
		this.setState(prevState => ({
			showChild: !prevState.showChild
		}));
	}

	render() {
		let showState = this.state.showChild ? 'opened' : '';
		return (
			<TableChildComponent 
				stateClick={showState}
				tableRowKey={this.props.tableRowKey}
				tableChild={this.props.tableChild}
				tableChildKey={this.props.tableChildKey}
				onClick={this.toggleClickShow.bind(this)}
				onClickRemoveRel={this.removeFilterRelativesHandle.bind(this)}
				relativeHeaders={this.props.state.relativesHeaders}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps, { removeFilterRelatives })(TableChildContainer);