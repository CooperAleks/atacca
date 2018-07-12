import React, { Component } from 'react';
import _ from "lodash";
import ChildHasPhoneComponent from '../components/ChildHasPhoneComponent';
import { fetchHeadersRelativesPhone, removeFilterPhone } from '../actions';
import { connect } from 'react-redux';

class ChildHasPhoneContainer extends Component {
	componentWillMount() {
		this.props.fetchHeadersRelativesPhone();
	}

	removeFilterPhoneHandle(parentIndex, relativeIndex, phoneIndex, phoneLength) {
		const { removeFilterPhone } = this.props;
		removeFilterPhone(parentIndex, relativeIndex, phoneIndex);
	}

	render() {
		return (
			<ChildHasPhoneComponent
				childHasPhone={this.props.childHasPhone}
				tableHeaders={this.props.state.relativesPhoneHeaders}
				tableChildKey={this.props.tableChildKey}
				tableRowKey={this.props.tableRowKey}
				onClickRemovePhone={this.removeFilterPhoneHandle.bind(this)} 
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps, { fetchHeadersRelativesPhone, removeFilterPhone })(ChildHasPhoneContainer);