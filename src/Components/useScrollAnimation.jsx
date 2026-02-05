import { useEffect, useState, useRef } from "react";

const useScrollAnimation = (threshold = 0.3) => {
	const ref = useRef();
	const [visible, setVisible] = useState();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setVisible(entry.isIntersecting);
			},
			{ threshold },
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [threshold]);
	return { ref, visible };
};

export default useScrollAnimation;
