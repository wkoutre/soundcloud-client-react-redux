import * as actionTypes from '../constants/actionTypes';

const setMe = (state, action) => {
	const { user } = action;
	return { ...state, user };
}

export default function(state = [], action) {
	switch(action.type) {
		case actionTypes.ME_SET:
			return setMe(state, action);
		default:
			return state;
	}
}

