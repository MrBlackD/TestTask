import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from "./../actions";
import {get} from "./../utils";
import Album from "./Album";
import Header from "./../components/Header";

class Albums extends React.Component {

	componentWillMount(){
		if(!this.props.params.userId){
			return;
		}
		this.props.actions.setAlbums([]);
		Promise.resolve(get("https://jsonplaceholder.typicode.com/albums?userId="+this.props.params.userId)).then((res)=>{
			console.log(res);
			this.props.actions.setAlbums(res);
		}).catch((error)=>{
			console.log("Error in promise", error)	;
		});
	}
	
	render(){
		if(!this.props.params.userId){
			return null;
		}
		if(this.props.albums.length == 0){
			return <Header text="Loading..."/>;
		}
		return (
			<div className="albums">
			<Header text={"Albums"}/>
				{this.props.albums.map((album,index)=>{
					return <Album key={index} album={album}/>;
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

export default connect(mapStateToProps,mapDispatchToProps)(Albums);