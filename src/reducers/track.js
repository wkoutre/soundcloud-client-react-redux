import * as actionTypes from '../constants/actionTypes';

const initialState = {
	tracks: [],
	activeTrack: null
}

/*
	setTracks is creating a variable, tracks, which is the property "tracks" from the action object
	action looks like: 
	{
		type: TRACKS_SET,
		tracks: [
			{
				title: "track 1"
			},
			{
				title: "track 2"
			}
		]
	}
*/

const setTracks = (state, action) => {
	const { tracks } = action;

	return {...state, tracks};
}

const setPlay = (state, action) => {
	const { track } = action;
	return {
		...state,
		activeTrack: track
	}
}

export default function (state = initialState, action) {
	switch(action.type) {
		case actionTypes.TRACKS_SET:
			return setTracks(state, action);
		case actionTypes.TRACK_PLAY:
			return setPlay(state, action);
		default:
			return state;
	}
}
