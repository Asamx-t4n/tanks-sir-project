import React from "react";
import { Link } from "react-router-dom";
import "./MissionAndVision.css";
import PrincipalMessage from "./PrincipalMessage";
const MissionAndVision = () => {
	return (
		<section className="mission-vision-section">
			<div className="mission-vision-container">
				<h1 className="section-title">Our Mission & Vision</h1>

				<div className="card-wrapper">
					<div className="mv-card">
						<h2>Our Mission</h2>
						<p>
							Our mission is to provide quality education that empowers students
							with knowledge, skills, and values to excel in their professional
							and personal lives.
						</p>
					</div>

					<div className="mv-card">
						<h2>Our Vision</h2>
						<p>
							Our vision is to become a leading academic institution known for
							excellence, innovation, and producing responsible global citizens.
						</p>

						<Link to="/principalMessage" className="mv-btn2">
							Principal's Message →
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionAndVision;
