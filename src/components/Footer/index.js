import React from "react";
import "./index.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
	return (
		<div className="footer-container">
			Copyright <CopyrightIcon fontSize="large" sx={{ marginX: "7px" }} />{" "}
			Team Five Brain Cells 2022
		</div>
	);
};

export default Footer;
