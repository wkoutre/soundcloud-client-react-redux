import * as actionTypes from '../constants/actionTypes';

export const playTrack = (track) => {
	return {
		type: actionTypes.TRACK_PLAY,
		track
	};
};

export const setTracks = (tracks) => {
	return {
		type: actionTypes.TRACKS_SET,
		tracks
	};
};
