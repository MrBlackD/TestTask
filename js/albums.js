import React from "react";


class Albums extends React.Component {
	
	render(){
		return (
			<h1>ALBUMS OF USER {this.props.params.userId}</h1>
		);
	}
}

export default Albums;