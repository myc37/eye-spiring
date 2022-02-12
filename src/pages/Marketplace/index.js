import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import AppNavbar from "../../components/Navbar";

const tiers = [
	{
		title: "1-Day Acuvue® Moist",
		price: "48",
		url: "moist.png",
		description: ["Monthly Package Description", "", "", ""],
		buttonText: "Get Started",
		buttonVariant: "outlined",
	},
	{
		title: "Acuvue® Vita®",
		subheader: "",
		price: "42",
		url: "vita.jpg",
		description: ["Quarterly Package Descripton", "", "", ""],
		buttonText: "Get started",
		buttonVariant: "outlined",
	},
	{
		title: "Acuvue® Oasys With Transitions™",
		price: "36",
		url: "transitions.png",
		description: ["Yearly Package Description", "", "", ""],
		buttonText: "Get started",
		buttonVariant: "outlined",
	},
	{
		title: "Acuvue­® Vita® For Astigmatism",
		price: "48",
		url: "astig.png",
		description: ["Monthly Package Description", "", "", ""],
		buttonText: "Get Started",
		buttonVariant: "outlined",
	},
	{
		title: " Acuvue® Moist For Multifocal",
		subheader: "",
		url: "multifocal.png",
		price: "42",
		description: ["Quarterly Package Descripton", "", "", ""],
		buttonText: "Get started",
		buttonVariant: "outlined",
	},
];

const Marketplace = () => {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{
					ul: { margin: 0, padding: 0, listStyle: "none" },
					marginBottom: "4rem",
				}}
			/>
			<CssBaseline />
			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 8 }}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Our Marketplace
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
				>
					Shop for our flagship products here!
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={8} alignItems="flex-end">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid item key={tier.title} xs={16} sm={8} md={6}>
							<Card sx={{ maxWidth: 345 }}>
								<CardContent>
									{" "}
									<CardMedia
										component="img"
										height="190"
										image="data:image/jpeg;base64,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"
										title="xd"
									/>
								</CardContent>

								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{
										align: "center",
										variant: "h5",
									}}
									action={<StarIcon />}
									disableTypography={false}
									subheaderTypographyProps={{
										align: "center",
									}}
									sx={{
										backgroundColor: (theme) =>
											theme.palette.grey[200],
									}}
								/>
								<CardContent>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "baseline",
											mb: 2,
										}}
									>
										{/* <Typography component="h2" variant="h3" color="text.primary">
                     
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography> */}
									</Box>
									<ul>
										Description
										{/* {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))} */}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={tier.buttonVariant}
									>
										Buy Now
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Marketplace;
