import React from "react";
import "./Home.css";
import WellcomeMessage from "./WellcomeMessage";
import OurPrograms from "./OurPrograms";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";

const Home = () => {
	return (
		<div className="container-heroSection">
			<img
				className="hero-Section-bg-img"
				src="/Collage.jpg"
				alt="colllage-img"
			/>

			<div className="hero-Section-Caption-div">
				<h1 className="hero-Section-Caption">
					''A GLOBAL ATMOSPHERE AT A REDUCED SCALE''
				</h1>
				<button className="hero-section-button">ENROLL NOW</button>
			</div>
			<div className="hero-Section-box">
				<div className="hero-section-box1">
					<div className="hero-section-box1-icon-div">
						<GiTeacher />
					</div>
					<p className="hero-section-box1-caption">EXPERIENCE 10+</p>
				</div>
				<div className="hero-section-box2">
					<div className="hero-section-box2-icon-div">
						<PiStudentBold />
					</div>
					<p className="hero-section-box2-caption">STUDENT 600+</p>
				</div>

				<div className="hero-section-box3">
					<div className="hero-section-box3-icon-div">
						<GiSpellBook />
					</div>
					<p className="hero-section-box3-caption">PROGRAMS 3+</p>
				</div>
				<div className="hero-section-box4">
					<div className="hero-section-box4-icon-div">
						<FaUniversity />
					</div>
					<p className="hero-section-box4-caption">YEAR OF EXPERIENCE 10+</p>
				</div>
			</div>

			<div className="wellcomeMessage-div">
				<WellcomeMessage />
				<OurPrograms />
			</div>
		</div>
	);
};
export default Home;
