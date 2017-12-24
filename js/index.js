import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer"
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import App from "./app";
import Albums from "./albums/Albums";
import Users from "./users/Users";
import Photos from "./photos/Photos";

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Users}/>
		<Route path='user/:userId' component={Albums}/>
		<Route path='albums/:albumId' component={Photos}/>
	</Route>
	</Router>
	</Provider>,
	 document.getElementById("root")
 );