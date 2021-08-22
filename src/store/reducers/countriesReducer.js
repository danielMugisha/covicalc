import { ActionTypes } from "../actions/actionTypes";

const initialState = {
	countries: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.GET_COUNTRIES:
			return {
				...state,
				countries: payload.countries,
			};
		default:
			return state;
	}
};
