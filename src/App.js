import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="test" element={<Test />} />
			</Routes>
		</div>
	);
}

export default App;
