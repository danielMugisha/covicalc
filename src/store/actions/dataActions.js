import axios from "axios";
import { ActionTypes } from "./actionTypes";

export const setCountryData = (countryData) => {
	return {
		type: ActionTypes.SET_COUNTRY_DATA,
		payload: { countryData },
	};
};

export const setContinentsData = (continentsData) => {
	return {
		type: ActionTypes.SET_CONTINENTS_DATA,
		payload: { continentsData },
	};
};

export const fetchCountryData = (country) => {
	return (dispatch) => {
		axios
			.get(
				`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`
			)
			.then((res) => {
				console.log("data", res.data);
				const countryData = res.data;
				dispatch(setCountryData(countryData));
			})
			.catch((err) => {
				const errMsg = err.message;
				console.log(errMsg);
			});
	};
};

export const fetchContinentsData = () => {
	return (dispatch) => {
		axios
			.get(`https://corona.lmao.ninja/v2/continents?yesterday=true&sort`)
			.then((res) => {
				const continentsData = res.data;
				dispatch(setContinentsData(continentsData));
			})
			.catch((err) => {
				const errMsg = err.message;
				console.log(errMsg);
			});
	};
};
