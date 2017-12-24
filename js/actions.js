import { actionTypes } from "./constants";

export function setUsers(data){
	return {
		type:actionTypes.SET_USERS,
		value:data
	}
}

export function setAlbums(data){
	return {
		type:actionTypes.SET_ALBUMS,
		value:data
	}
}

export function setPhotos(data){
	return {
		type:actionTypes.SET_PHOTOS,
		value:data
	}
}

