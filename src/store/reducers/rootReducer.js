import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { countriesReducer } from "./countriesReducer";

const rootReducer = combineReducers({
	data: dataReducer,
	countries: countriesReducer,
});

export default rootReducer;
