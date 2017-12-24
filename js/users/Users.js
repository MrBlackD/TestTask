import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from "./../actions";
import {get} from "./../utils"
import UserCard from './UserCard'
import Header from "./../components/Header";


class Users extends React.Component {

	componentWillMount(){
		this.props.actions.setUsers([]);
		Promise.resolve(get("https://jsonplaceholder.typicode.com/users")).then((res)=>{
			console.log(res);
			this.props.actions.setUsers(res);
		}).catch((error)=>{
			console.log("Error in promise", error)	;
		});

	}
	
	render(){
		const {users} = this.props;
		if(users.length == 0){
			return <Header text="Loading..."/>;
		}
		
		return (
		<div>
			<Header text={"List of users"}/>
			{users.map((user,index)=>{
				return <UserCard key={index} user={user}/>;
			})}

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