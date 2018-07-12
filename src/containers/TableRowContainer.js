import React, { Component } from 'react';
import TableRowComponent from '../components/TableRowComponent';
import { fetchHeadersRelatives } from '../actions';
import { connect } from 'react-redux';

class TableRowContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showChild: false
		}
	}

	componentWillMount() {
		this.props.fetchHeadersRelatives();
	}

	toggleClickShow(ev) {
		ev.preventDefault();
		ev.stopPropagation();

		this.setState(prevState => ({
			showChild: !prevState.showChild
		}));
	}

	render() {
		let showState = this.state.showChild ? 'opened' : '';

		return (
			<TableRowComponent 
				stateClick={showState}
				tableRow={this.props.tableRow}
				tableRowKey={this.props.tableRowKey}
				onClick={this.toggleClickShow.bind(this)}
				onClickRemove={this.props.onClickRemove}
				relativesHeaders={this.props.state.relativesHeaders}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps, { fetchHeadersRelatives })(TableRowContainer);