import React from "react";
import "./OurTeams.css";
import Cards from "./Cards";

const OurTeams = () => {
	const OurTeacher = [
		{
			id: 1,
			img: "./sir1.jpg",
			Contact: "984251000",
			Name: "Ram bahadur Bhattarai",
			Education: "Master in English",
		},
		{
			id: 2,
			img: "./sir2.jpg",
			Contact: "9842517623",
			Name: "Kisshor raj Thakur",
			Education: "Master in Science",
		},
		{
			id: 3,
			img: "./mam1.jpg",
			Contact: "****",
			Name: "Radha Shresta",
			Education: "Master in Science",
		},
		{
			id: 4,
			img: "./sir3.jpg",
			Contact: "****",
			Name: "Ram Charan Yadav",
			Education: "Master in Nepali",
		},
		{
			id: 5,
			img: "./sir4.jpg",
			Contact: "*****",
			Name: "Krishina dev Rai",
			Education: "Master in Social",
		},
		{
			id: 6,
			img: "./mam2.jpg",
			Contact: "****",
			Name: "Subedra Adhikari",
			Education: "Master in Science",
		},
		{
			id: 7,
			img: "./sir5.jpg",
			Contact: "****",
			Name: "Tanka Bhattarai",
			Education: "Master in Math",
		},
		{
			id: 8,
			img: "./sir6.jpg",
			Contact: "*****",
			Name: "Risav Ojha",
			Education: "Master in Health",
		},
		{
			id: 9,
			img: "./sir7.jpg",
			Contact: "******",
			Name: "Ankit Nepal",
			Education: "Master in Account",
		},
	];
	return (
		<div className="OurTeams-container">
			<div className="row">
				{OurTeacher.map((Teacher) => {
					return (
						<div className="col-md-4 col-sm-6 OurTeams-Cards" key={Teacher.id}>
							<Cards
								src={Teacher.img}
								name={Teacher.Name}
								Education={Teacher.Education}
								Button={Teacher.Contact}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default OurTeams;
