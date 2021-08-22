import axios from "axios";
import { ActionTypes } from "./actionTypes";

export const getCountries = (countries) => {
	return {
		type: ActionTypes.GET_COUNTRIES,
		payload: { countries },
	};
};

export const fetchCountries = () => {
	return (dispatch) => {
		axios
			.get("https://corona.lmao.ninja/v2/countries?yesterday&sort")
			.then((res) => {
				console.log("countries", res.data);
				const countries = res.data;
				dispatch(getCountries(countries));
			})
			.catch((err) => {
				const errMsg = err.message;
				console.log(errMsg);
			});
	};
};
