import { ActionTypes } from "../actions/actionTypes";

const initialState = {
	countryData: [],
	continentsData: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_COUNTRY_DATA:
			return {
				...state,
				countryData: payload.countryData,
			};
		case ActionTypes.SET_CONTINENTS_DATA:
			return {
				...state,
				continentsData: payload.continentsData,
			};
		default:
			return state;
	}
};
