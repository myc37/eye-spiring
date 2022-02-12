import stock1 from "./stock-1.jpg";
import stock2 from "./stock-2.jpg";
import stock3 from "./stock-3.jpg";

export const stockImages = [stock1, stock2, stock3];

export const getImage = (index) => {
	return stockImages[index % stockImages.length];
};
