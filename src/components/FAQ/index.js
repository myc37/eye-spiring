import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";

const FAQ = ({ data }) => {
	const [expanded, setExpanded] = React.useState("panel0");

	const handleChange = (panel) => (_, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<div className="faq-container">
			<Typography sx={{ fontSize: "24px" }}>
				Frequently Asked Questions
			</Typography>
			<div className="faq-inner">
				{data.map((item, index) => {
					return (
						<Accordion
							key={index}
							sx={{ border: "1px solid gray" }}
							disableGutters
							elevation={0}
							expanded={expanded === `panel${index}`}
							onChange={handleChange(`panel${index}`)}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`panel${index}-content`}
								id={`panel${index}-header`}
								sx={{
									backgroundColor: "rgb(176, 223, 229)",
									"&:not(:last-child)": {
										borderBottom: 0,
									},
									"&:before": {
										display: "none",
									},
								}}
							>
								<Typography>{item.question}</Typography>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									padding: "theme.spacing(2)",
									borderTop: "1px solid rgba(0, 0, 0, .125)",
									backgroundColor:
										"rgba(176, 223, 229, 0.25)",
								}}
							>
								<Typography>{item.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</div>
		</div>
	);
};

export default FAQ;
