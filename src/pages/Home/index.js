import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import { data } from "../../components/FAQ/qna";
import Guide from "../../components/Guide";

const Home = () => {
	return (
		<>
			<Banner />
			<Guide />
			<FAQ data={data} />
		</>
	);
};

export default Home;
