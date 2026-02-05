import React from "react";
import "./wellcomeMessage.css";
import useScrollAnimation from "./useScrollAnimation";

const WellcomeMessage = () => {
	const { ref, visible } = useScrollAnimation();
	return (
		<div className="message-container">
			<div className="row">
				<div className="col-md-5 col-sm-12">
					<div
						ref={ref}
						className={`wellcome-Student-img-div slide-left-img ${visible ? "show" : "hide"}`}
					>
						<img
							className="wellcome-Student-img"
							src="./wellcomeStudent.jpg"
							alt="student img"
						/>
					</div>
				</div>
				<div className="col-md-7 col-sm-12">
					<div className="wellcome-Student-caption-div">
						<div
							ref={ref}
							className={`wellcome-Student-caption slide-Left ${visible ? "show" : "off"}`}
						>
							<h2 className="wellcome-Topic">Welcome Students</h2>
							Welcome, dear students! We are delighted to have you join our
							learning community. This is a place where knowledge, creativity,
							and confidence grow together. Feel free to ask questions, share
							ideas, and learn at your own pace. Stay curious, work hard, and
							make the most of every opportunity ahead. Your journey to success
							starts here.
						</div>
					</div>
				</div>
			</div>
			<div className="recentNews-container">
				<h1 className="recentNews-caption">Recent News</h1>
				<div className="row notice-date ">
					<div className="col-md-4 col-sm-6 noticeMain-div">
						<h3 className="notice-caption">Notice</h3>
						<div className="row">Dashain</div>
						<div className="row">result</div>
						<div className="row">holiday</div>
						<div className="row">holiday</div>
					</div>
					<div className="col-md-4 col-xsm-6 dateMain-div">
						<h3 className="date-caption">Date</h3>
						<div className="row">2083/06/14</div>
						<div className="row">2083/06/08</div>
						<div className="row">2083/06/14</div>
						<div className="row">2083/06/14</div>
					</div>
					<div className="col-md-4   rolesMain-div">
						<h3 className="roles-caption">Roles</h3>
						<div className="row">admin</div>
						<div className="row">admin</div>
						<div className="row">admin</div>
						<div className="row">admin</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WellcomeMessage;
