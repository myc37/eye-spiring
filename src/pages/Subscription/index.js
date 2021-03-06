import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import AppNavbar from "../../components/Navbar";
import "./index.css";

const tiers = [
	{
		title: "Monthly",
		price: "48",
		description: ["Monthly Package Description", "", "", ""],
		buttonText: "Get Started",
		buttonVariant: "outlined",
	},
	{
		title: "Quarterly",
		subheader: "Most popular",
		price: "42",
		description: ["Quarterly Package Descripton", "", "", ""],
		buttonText: "Get started",
		buttonVariant: "contained",
	},
	{
		title: "Yearly",
		price: "36",
		description: ["Yearly Package Description", "", "", ""],
		buttonText: "Get started",
		buttonVariant: "outlined",
	},
];

function Subscription() {
	return (
		<div className="subscription-container">
			<GlobalStyles
				styles={{
					ul: { margin: 0, padding: 0, listStyle: "none" },
				}}
			/>
			<CssBaseline />
			<AppNavbar></AppNavbar>
			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 4 }}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Subscriptions
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
				>
					Delivery to your doorstep!
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
				>
					Keep your eyes sharp and hydrated with our monthly
					subscription packages.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === "Enterprise" ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: "center" }}
									action={
										tier.title === "Pro" ? (
											<StarIcon />
										) : null
									}
									subheaderTypographyProps={{
										align: "center",
									}}
									sx={{
										backgroundColor: (theme) =>
											theme.palette.mode === "light"
												? theme.palette.grey[200]
												: theme.palette.grey[700],
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
										<Typography
											component="h2"
											variant="h3"
											color="text.primary"
										>
											${tier.price}
										</Typography>
										<Typography
											variant="h6"
											color="text.secondary"
										>
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component="li"
												variant="subtitle1"
												align="center"
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={tier.buttonVariant}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default function Subscripton() {
	return <Subscription />;
}
