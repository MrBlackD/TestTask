import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Link} from "react-router";
import * as actions from "./actions";

class Users extends React.Component {
	
	render(){

		return (
		<div>
			<div>{this.props.test}</div>
			<button onClick={this.props.actions.test}>test</button>

		</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);