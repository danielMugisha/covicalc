import React, { useState, useEffect } from "react";
import "./App.css";
import Select from "react-select";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import profileImage from "./assets/toonProfile.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./store/actions/countriesActions";
import Carousel from "./components/carousel/Carousel";
import {
	fetchContinentsData,
	fetchCountryData,
} from "./store/actions/dataActions";

function App(props) {
	const dispatch = useDispatch();
	const { countries } = useSelector((state) => state.countries);
	const { countryData } = useSelector((state) => state.data);
	const { continentsData } = useSelector((state) => state.data);
	console.log(continentsData);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const options = countries.map((c) => {
		const option = {
			value: c.country,
			label: (
				<div className="country">
					<img src={c.countryInfo.flag} />
					<p>{c.country}</p>
				</div>
			),
		};
		return option;
	});
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleChangeCountry = (selectedOption) => {
		setCountry(selectedOption.value);
	};

	const styles = {
		control: (base) => ({
			...base,
			border: "none",
			minWidth: "150px",
			borderRadius: "6px 0 0 6px",
			margin: 0,
			minHeight: "39px",
			outline: "none",
		}),
	};
	const [country, setCountry] = useState();

	const handleSearch = () => {
		dispatch(fetchCountryData(country));
	};

	useEffect(() => {
		dispatch(fetchCountries());
		dispatch(fetchContinentsData());
	}, []);

	return (
		<Router>
			<div className="App">
				<div className="header">
					<div className="navbar">
						<div className="logo">COVICALC</div>
						<div className="contact">
							<button>CONTACT</button>
						</div>
					</div>
					<div className="updates">UPDATES</div>
					<div className="labelText">Search a country</div>
					<div className="search">
						<div className="searchCombo">
							<Select
								options={options}
								styles={styles}
								onChange={handleChangeCountry}
								components={{
									IndicatorSeparator: () => null,
								}}
							/>
						</div>
						<div className="calendarBox">
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									style={{
										height: "100%",
										width: "100%",
										fontWeight: "bold",
									}}
									disableToolbar
									variant="inline"
									format="dd MMM yyyy"
									margin="normal"
									id="date-picker-inline"
									value={selectedDate}
									onChange={handleDateChange}
									KeyboardButtonProps={{
										"aria-label": "change date",
									}}
									InputProps={{ disableUnderline: true }}
								/>{" "}
							</MuiPickersUtilsProvider>
						</div>
						<div className="submitButton">
							<button onClick={handleSearch}>SUBMIT</button>
						</div>
					</div>
					<div className="cumulative">
						<div className="bigNumber">
							{countryData.cases
								? countryData.cases
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
								: 0}
						</div>
						<div className="labelText">Cumulatively</div>
					</div>
				</div>
				<div className="middle">
					<div className="info">
						<div className="infoCard">
							<div className="infoNumber">
								{countryData.tests
									? countryData.tests
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
									: 0}
							</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">
								{countryData.population
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">
								{countryData.todayCases
									? countryData.todayCases
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
									: 0}
							</div>
							<div className="infoText">Positive cases</div>
							<div className="infoOverall">
								{countryData.cases
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">
								{countryData.critical
									? countryData.critical
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
									: 0}
							</div>
							<div className="infoText">Hospitalized</div>
							<div className="infoOverall">
								{countryData.active
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">
								{countryData.todayRecovered
									? countryData.todayRecovered
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
									: 0}
							</div>
							<div className="infoText">Recovered</div>
							<div className="infoOverall">
								{countryData.recovered
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">
								{countryData.todayDeaths
									? countryData.todayDeaths
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
									: 0}
							</div>
							<div className="infoText">Deaths</div>
							<div className="infoOverall">
								{countryData.deaths
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</div>
						</div>
						{/* <div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Vaccinated</div>
							<div className="infoOverall">2,188,881</div>
						</div> */}
					</div>
					<div className="continental">
						<div className="continentalTitle">PER CONTINENT</div>
						<Carousel data={continentsData} />
					</div>
					<div className="profile">
						<div className="image">
							<img src={profileImage} alt="photo" />
						</div>
						<div className="personalInfo">
							<div style={{ width: "70%" }}>
								<div className="personalName">Daniel MUGISHA</div>
								<div className="personalTitle">Software Engineer</div>
								<div className="date">20 August 2021</div>
							</div>
						</div>
					</div>
					<div className="reachMe">
						<div className="reachMeTitle">REACH ME</div>
						<div className="contactDetails">
							<div className="detailsLabel">Email</div>
							<div>dmugisha189@gmail.com</div>
						</div>
						<div className="contactDetails">
							<div className="detailsLabel">Phone</div>
							<span>0782035937</span>
						</div>
						<div className="contactDetails">
							<div className="detailsLabel">Profile</div>
							<Link
								to="https://github.com/danielMugisha"
								style={{ textDecoration: "none", color: "#ffffff" }}
							>
								<div>Github</div>
							</Link>
						</div>
					</div>
					<div className="footer">
						<div className="developer">
							<span style={{ fontWeight: "300" }}>Developed by:</span>{" "}
							<span style={{ fontWeight: "500" }}>Daniel MUGISHA</span>
						</div>
						<div className="designer">
							<span style={{ fontWeight: "300" }}>Designed by:</span>{" "}
							<span style={{ fontWeight: "500" }}>Awesomity Lab</span>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
