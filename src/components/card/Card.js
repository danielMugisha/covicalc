import React from "react";

const Card = ({ continent }) => {
	return (
		<div className="card">
			<div className="left">
				<div className="name">{continent.continent}</div>
				<div className="newCases">
					<div className="newCasesNumber">
						{continent.todayCases
							?.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
					<div className="newCasesText">New cases</div>
				</div>
				<div className="allCases">
					All cases:{" "}
					{continent.cases?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</div>
			</div>
			<div className="right">
				<div className="details">
					<div className="detailsNumber">
						{continent.todayDeaths
							?.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
					<div className="detailsText">New deaths</div>
					<div className="detailsOverall">
						{continent.deaths?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
				</div>
				<div className="details">
					<div className="detailsNumber">
						{continent.todayRecovered
							?.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
					<div className="detailsText">Newly recovered</div>
					<div className="detailsOverall">
						Total recovered:{" "}
						{continent.recovered
							?.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
				</div>
				<div className="details" style={{ border: "none" }}>
					<div className="detailsNumber">
						{continent.tests?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
					<div className="detailsText">New tests</div>
					<div className="detailsOverall">
						Population:{" "}
						{continent.population
							?.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
