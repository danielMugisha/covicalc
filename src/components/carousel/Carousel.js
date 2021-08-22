import React, { useState, useEffect, useRef } from "react";
import Card from "../card/Card";
import Right from "../../assets/ic-arrows-right.png";
import Left from "../../assets/ic-arrows-left.png";

const Carousel = ({ data }) => {
	console.log(data);
	const cards = useRef();
	const [currentCard, setCurrentCard] = useState(1);

	const handleNext = () => {
		if (currentCard < 2) {
			let newCurrentCard = currentCard + 1;
			setCurrentCard(newCurrentCard);
			cards.current.style.transitionDuration = "0.9s";
			cards.current.style.transform = `translate(-${960}px )`;
		} else {
			return;
		}
	};

	const handlePrevious = () => {
		if (currentCard > 0) {
			let newCurrentCard = currentCard - 1;
			setCurrentCard(newCurrentCard);
			cards.current.style.transitionDuration = "0.9s";
			cards.current.style.transform = `translate(${960}px )`;
		} else {
			return;
		}
	};

	return (
		<div className="cardsViewport">
			{currentCard >= 1 ? (
				<div
					onClick={handlePrevious}
					style={{
						position: "absolute",
						top: "50%",
						left: "100px",
						height: "70px",
						width: "70px",
						backgroundColor: "#1e776e",
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#ffffff",
						cursor: "pointer",
						outline: "none",
						border: "none",
						zIndex: 5,
					}}
				>
					<img src={Left} alt="<" />
				</div>
			) : (
				""
			)}
			{currentCard <= 1 ? (
				<div
					onClick={handleNext}
					style={{
						position: "absolute",
						top: "50%",
						right: "100px",
						height: "70px",
						width: "70px",
						backgroundColor: "#1e776e",
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#ffffff",
						cursor: "pointer",
						outline: "none",
						border: "none",
						zIndex: 5,
					}}
				>
					<img src={Right} alt=">" />
				</div>
			) : (
				""
			)}
			<div className="cards" ref={cards}>
				{data.map((d) => (
					<Card continent={d} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
