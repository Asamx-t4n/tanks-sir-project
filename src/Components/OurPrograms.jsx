import React, { useState } from "react";
import "./OurPrograms.css";
import useScrollAnimation from "./useScrollAnimation";
import Cards from "./Cards";
import useSlider from "./Slider";
import { Link } from "react-router-dom";
import Science from "./Science";
import Management from "./Management";
import HotelManagement from "./HotelManagement";

const OurPrograms = () => {
	const { ref, visible } = useScrollAnimation();

	const Bootscamp = [
		{ id: 1, img: "/logo1.jpg" },
		{ id: 2, img: "/logo2.jpg" },
		{ id: 3, img: "/logo3.jpg" },
		{ id: 4, img: "/logo4.jpg" },
		{ id: 5, img: "/logo5.jpg" },
	];
	const StudentReview = [
		{
			id: 1,
			img: "/rupak.jpg",
			student: "Rupak shresta",
			formerstudent: "Former Student",
			description:
				"This college gave me a strong foundation in both theory and practical learning. The teachers were very supportive and always motivated us to do better",
		},
		{
			id: 2,
			img: "/samrat.jpg",
			formerstudent: "Former Student",
			student: "Samrat Bhattarai",
			description:
				"I really enjoyed my time here. The learning environment was friendly, and the guidance from lecturers helped me gain confidence in my skills.",
		},
		{
			id: 3,
			img: "/luffy.jpg",
			formerstudent: "Former Student",
			student: "Luffy",
			description:
				"Studying at this college was a great experience. Practical classes and projects prepared me well for real-world challenges.",
		},
		{
			id: 4,
			img: "/Gojo.jpg",
			formerstudent: "Former Student",
			student: "Gojo",
			description:
				"The college focuses not only on education but also on discipline and personal growth. Im grateful for the support I received during my studies.",
		},
		{
			id: 5,
			img: "/Rockey.jpg",
			formerstudent: "Former Student",
			student: "Rockey Vai",
			description:
				"Well-managed classes, experienced teachers, and a positive environment made my college life memorable and productive.",
		},
		{
			id: 6,
			img: "/aditya.jpg",
			formerstudent: "Former Student",
			student: "Aditya",
			description:
				"This college helped shape my career path. The encouragement from faculty and practical exposure made a big difference.",
		},
	];

	const [nextSlide, setNextSlide] = useState(false);
	const BootscampSlider = useSlider(Bootscamp.length);
	const StudentReviewSlider = useSlider(StudentReview.length);

	return (
		<div className="">
			<div className="row our-Program-container">
				<h1 className="Our-Programs-Caption">Our Programs</h1>
				<div className="col-md-4 col-sm-12 our-Program-Science-div">
					<div className={`our-Program-Science-img-div `}>
						<img
							ref={ref}
							className={`our-Program-Science-img ${visible ? "show" : ""}`}
							src="./science.jpg"
							alt="science img"
						/>
					</div>
					<button>
						<Link className="OurProgram-Link-Button" to="./Science">
							Science
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-12 our-Program-Management-div">
					<div className={`our-Program-Management-img-div `}>
						<img
							ref={ref}
							className={`our-Program-Management-img ${visible ? "show" : ""} `}
							src="./management.jpg"
							alt="science img"
						/>
					</div>
					<button>
						<Link className="OurProgram-Link-Button" to="./Management">
							Management
						</Link>
					</button>
				</div>
				<div className="col-md-4 col-sm-12 our-Program-HotelManagement-div">
					<div className={`our-Program-HotelManagement-img-div `}>
						<img
							ref={ref}
							className={`our-Program-HotelManagement-img  ${visible ? "show" : ""}`}
							src="./HotelManagement.jpg"
							alt="science img"
						/>
					</div>
					<button>
						<Link className="OurProgram-Link-Button" to="./HotelManagement">
							HotelManagement
						</Link>
					</button>
				</div>
			</div>
			<div className="row bootscamp-slider">
				<h1 className="Trainig-Bootcamp">Training Bootcamp</h1>

				<img
					className={`BootsCamp-img-slider-small ${nextSlide ? "Show-Animation" : ""}`}
					src={Bootscamp[BootscampSlider.FpreIndex].img}
				/>

				<img
					className={`BootsCamp-img-slider-big slider-animation ${nextSlide ? "biganimation" : ""}`}
					src={Bootscamp[BootscampSlider.current].img}
				/>

				<img
					className={`BootsCamp-img-slider-small slider-animation ${nextSlide ? "Show-Animation" : ""}`}
					src={Bootscamp[BootscampSlider.FnextIndex].img}
				/>
				<div className="next-prev-slider-buttons d-flex justify-content-center">
					<button
						className="prev-button"
						onClick={() => {
							BootscampSlider.back();
						}}
					>
						Prev
					</button>
					<button
						className="next-button"
						onClick={() => {
							BootscampSlider.next();
							setNextSlide(true);
							setTimeout(() => setNextSlide(false), 200);
						}}
					>
						next
					</button>
				</div>
			</div>
			<div className="row student-review-div  ">
				<h1 className="student-review-Caption ">Student Review</h1>
				<div className=" col-md-4 review-card  d-none d-md-block ">
					<Cards
						src={StudentReview[StudentReviewSlider.FpreIndex].img}
						name={StudentReview[StudentReviewSlider.FpreIndex].student}
						formerStudent={
							StudentReview[StudentReviewSlider.FpreIndex].formerstudent
						}
						description={
							StudentReview[StudentReviewSlider.FpreIndex].description
						}
					/>
				</div>
				<div className=" col-md-4 col-12 review-card ">
					<Cards
						src={StudentReview[StudentReviewSlider.current].img}
						name={StudentReview[StudentReviewSlider.current].student}
						formerStudent={
							StudentReview[StudentReviewSlider.current].formerstudent
						}
						description={StudentReview[StudentReviewSlider.current].description}
					/>
				</div>
				<div className=" col-md-4 review-card  d-none d-md-block ">
					<Cards
						src={StudentReview[StudentReviewSlider.FnextIndex].img}
						name={StudentReview[StudentReviewSlider.FnextIndex].student}
						formerStudent={
							StudentReview[StudentReviewSlider.FnextIndex].formerstudent
						}
						description={
							StudentReview[StudentReviewSlider.FnextIndex].description
						}
					/>
				</div>
				<div className="next-prev-slider-buttons d-flex justify-content-center">
					<button
						className="prev-button"
						onClick={() => {
							StudentReviewSlider.back();
						}}
					>
						Prev
					</button>
					<button
						className="next-button"
						onClick={() => {
							StudentReviewSlider.next();
							setNextSlide(true);
							setTimeout(() => setNextSlide(false), 200);
						}}
					>
						next
					</button>
				</div>
			</div>
		</div>
	);
};
export default OurPrograms;
