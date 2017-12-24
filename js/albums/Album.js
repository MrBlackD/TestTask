import React from "react";
import {Link} from "react-router";

export default class Album extends React.Component{

    render(){
        const {id,title} = this.props.album;
        return (
            <div className="album">
                <Link to={"albums/"+id}>{title}</Link>
            </div>
        );
    }
}