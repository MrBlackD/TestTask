import React from "react";
import { hashHistory } from 'react-router'

export default class UserCard extends React.Component{

    render(){
        const {name, username, email, website, phone, address, company,id} = this.props.user;
        const header = name + "@" + username;

        return (
            <div className={"userCard"} onClick={()=>hashHistory.push('/user/'+id)}>
                <div className={"header"}>{header}</div>
                <div className="contacts">
                    <div>E-mail: <a href={"mailto:"+email}>{email}</a></div>
                    <div>Phone: {phone}</div>
                    <div>Site: <a href={website}>{website}</a></div>
                </div>
            </div>
        );
    }
}

