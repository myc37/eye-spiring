import React from "react";
import "./index.css";
import number1 from "./number-1.png";
import number2 from "./number-2.png";
import number3 from "./number-3.png";
import { Link } from "react-router-dom";

const Guide = () => {
	return (
		<div className="guide-container">
			<div className="guide-section">
				<img
					src={number1}
					alt="number1"
					style={{ height: "100px", width: "100px" }}
				/>
				<h4 className="guide-text">Register and log in to AcuView</h4>
			</div>
			<div className="guide-section">
				<img
					src={number2}
					alt="number2"
					style={{ height: "100px", width: "100px" }}
				/>
				<h4 className="guide-text">
					Browse our onlinetelehealth services
				</h4>
			</div>
			<div className="guide-section">
				<img
					src={number3}
					alt="number3"
					style={{ height: "100px", width: "100px" }}
				/>
				<h4 className="guide-text">
					Purchase our products directly via the{" "}
					<Link to="/market">Marketplace</Link>
				</h4>
			</div>
		</div>
	);
};

export default Guide;
