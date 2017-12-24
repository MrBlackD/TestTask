import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component{

    render(){
        return(
            <Link className="link" to="/">
                <div className="title">{this.props.text}</div>
            </Link>
        );
    }
}