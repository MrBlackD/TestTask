import React from "react";
import "./../css/style.less";

class App extends React.Component {
	
	render(){
		return <div className={"test"}>{this.props.children}</div>;
	}
}

export default App;