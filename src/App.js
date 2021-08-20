import React, { useState } from "react";
import "./App.css";
import Select from "react-select";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import profileImage from "./assets/toonProfile.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const styles = {
		control: (base) => ({
			...base,
			border: "none",
			minWidth: "150px",
			borderRadius: "6px 0 0 6px",
			margin: 0,
			minHeight: "45px",
		}),

		customDate: {
			"& input::placeholder": {
				fontWeight: "700",
			},
		},
	};
	const [country, setCountry] = useState("");
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
							<button>SUBMIT</button>
						</div>
					</div>
					<div className="cumulative">
						<div className="bigNumber">2,188,881</div>
						<div className="labelText">Cumulatively</div>
					</div>
				</div>
				<div className="middle">
					<div className="info">
						<div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">2,188,881</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">2,188,881</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">2,188,881</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">2,188,881</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">2,188,881</div>
						</div>
						<div className="infoCard">
							<div className="infoNumber">11,270</div>
							<div className="infoText">Tests</div>
							<div className="infoOverall">2,188,881</div>
						</div>
					</div>
					<div className="continental">
						<div className="continentalTitle">PER CONTINENT</div>
						<div className="cards">
							<div className="card">
								<div className="left">
									<div className="name">Asia</div>
									<div className="newCases">
										<div className="newCasesNumber">354,270</div>
										<div className="newCasesText">New cases</div>
									</div>
									<div className="allCases">All cases: 89,188,881</div>
								</div>
								<div className="right">
									<div className="details">
										<div className="detailsNumber">14,764</div>
										<div className="detailsText">New deaths</div>
										<div className="detailsOverall">Total deaths: 4,254</div>
									</div>
									<div className="details">
										<div className="detailsNumber">14,764</div>
										<div className="detailsText">New deaths</div>
										<div className="detailsOverall">Total deaths: 4,254</div>
									</div>
									<div className="details" style={{ border: "none" }}>
										<div className="detailsNumber">14,764</div>
										<div className="detailsText">New deaths</div>
										<div className="detailsOverall">Total deaths: 4,254</div>
									</div>
								</div>
							</div>
						</div>
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
