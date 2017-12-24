const initialState = {
	test: 0
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case "TEST":
			return {...state,test:state.test + 1};
		default:
			return state;
	}
}