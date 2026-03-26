import React, { useState } from "react";
const useSlider = (length) => {
	const [current, setCurrent] = useState(0);
	const next = () => {
		setCurrent((prev) => (prev + 1) % length);
	};
	const back = () => {
		setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
	};
	const FnextIndex = (current + 1) % length;
	const FpreIndex = current === 0 ? length - 1 : current - 1;
	return { current, next, back, FnextIndex, FpreIndex };
};
export default useSlider;
