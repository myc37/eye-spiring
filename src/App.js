import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Subscriptions from "./pages/Subscription";
import Marketplace from "./pages/Marketplace"
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
				<Route path = "/market" element = {<Marketplace/>}/>
				<Route path = "/subscriptions" element = {<Subscriptions/>}/>
			</Routes>
		</div>
	);
}

export default App;
