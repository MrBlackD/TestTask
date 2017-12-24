import React from "react";


class Photos extends React.Component {
	
	render(){
		return (
			<h1>PHOTOS OF ALBUM {this.props.params.albumId}</h1>
		);
	}
}

export default Photos;