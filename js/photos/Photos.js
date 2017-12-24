import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from "./../actions";
import {get} from "./../utils";
import Header from "./../components/Header";

class Photos extends React.Component {
	componentWillMount(){
		if(!this.props.params.albumId){
			return;
		}
		this.props.actions.setPhotos([]);
		Promise.resolve(get("https://jsonplaceholder.typicode.com/photos?albumId="+this.props.params.albumId)).then((res)=>{
			console.log(res);
			this.props.actions.setPhotos(res);
		}).catch((error)=>{
			console.log("Error in promise", error)	;
		});
	}
	render(){
		if(!this.props.params.albumId){
			return null;
		}
		if(this.props.photos.length == 0){
			return <Header text="Loading..."/>;
		}
		return (
			<div className="photos">
			<Header text="Photos"/>
				<div className="container">
				
				{this.props.photos.map((photo,index)=>{
					return <img key={index} className="tumbnail" src={photo.thumbnailUrl}/>;
				})}
				</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Photos);