import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [counter, setCounter] = useState(0);
	let color = "green";

	return (
		<>
			<div>{counter}</div>
			<div>
				<button
					onClick={() => setCounter(counter + 1)}
					style={{ color: `${color}` }}
				>
					increase counter
				</button>
				<Link to="/about">link to about page</Link>
			</div>
		</>
	);
};

export default Home;
