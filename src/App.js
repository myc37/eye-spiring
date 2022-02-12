import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import Marketplace from "./pages/Marketplace";
import AppNavbar from "./components/Navbar";
function App() {
	return (
		<div>
			<AppNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
				<Route path="/market" element={<Marketplace />} />
				<Route path="/subscriptions" element={<Subscription />} />
			</Routes>
		</div>
	);
}

export default App;
