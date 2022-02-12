import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "./index.css";
import stock1 from "./media/stock-1.jpg";
import stock2 from "./media/stock-2.jpg";
import stock3 from "./media/stock-3.jpg";
import { stockImages } from "./media";

const Banner = () => {
	return <EmblaCarousel slides={stockImages} />;
};

export default Banner;
