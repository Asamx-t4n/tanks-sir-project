import React from "react";
import "./Facilities.css";

const facilities = [
	{
		img: "./Moder-classroom.jpg",
		title: "Modern Classrooms",
		desc: "Spacious and well-equipped classrooms with smart boards and comfortable seating.",
	},
	{
		img: "./Science-lab.jpg",
		title: "Science Laboratories",
		desc: "Fully equipped labs for Physics, Chemistry, and Biology with practical learning.",
	},
	{
		img: "./Computer-lab.jpg",
		title: "Computer Lab",
		desc: "Advanced computer systems with high-speed internet for IT and research work.",
	},
	{
		img: "./Library.jpg",
		title: "Library",
		desc: "A peaceful environment with a wide range of academic and reference books.",
	},
	{
		img: "./Sports.jpg",
		title: "Sports Facilities",
		desc: "Indoor and outdoor sports areas for physical fitness and extracurricular activities.",
	},
	{
		img: "./Cafe-catria.jpg",
		title: "Cafeteria",
		desc: "Clean and hygienic cafeteria serving fresh and healthy food.",
	},
];

const Facilities = () => {
	return (
		<div className="Container facilities">
			<h2 className="facilities-title">Our Facilities</h2>

			<div className="facilities-grid row">
				{facilities.map((item, index) => (
					<div className="facility-card col-md-4" key={index}>
						<h3>{item.title}</h3>
						<img src={item.img} className="Facilities-img" />
						<p>{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Facilities;
