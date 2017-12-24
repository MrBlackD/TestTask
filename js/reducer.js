import { actionTypes } from "./constants";

const initialState = {
	users:[],
	albums:[],
	photos:[]
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_USERS:
			return {...state,users:action.value};
		case actionTypes.SET_ALBUMS:
			return {...state,albums:action.value};
			case actionTypes.SET_PHOTOS:
			return {...state,photos:action.value};
		default:
			return state;
	}
}