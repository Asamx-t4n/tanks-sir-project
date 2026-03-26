import React, { useEffect, useState } from "react";
import "./NoticePopUp.css";
import { GiCrossMark } from "react-icons/gi";

const NoticePopUp = () => {
	const NoticePost = [
		{ id: 1, src: "./GoodLuck-exam.jpg" },
		{ id: 2, src: "./GoodLuck-exam2.jpg" },
	];
	useEffect(() => {
		setShowPopUP(true);
	}, []);
	const [showPopUp, setShowPopUP] = useState(false);
	const [current, setCurrent] = useState(0);
	const CrossBtnHandle = () => {
		if (current < NoticePost.length - 1) {
			setCurrent(current + 1);
		} else {
			setShowPopUP(false);
		}
	};
	return (
		<>
			{showPopUp && (
				<div className="PopHero-container">
					<div className="Notice-PopUp-AllData">
						<button className="PopUp-Cross-Button" onClick={CrossBtnHandle}>
							<GiCrossMark className="PopUp-cross-Icon" />
						</button>
						<div className="PopUp-img-div">
							<img src={NoticePost[current].src} className="Notice-PopUp-Img" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default NoticePopUp;
