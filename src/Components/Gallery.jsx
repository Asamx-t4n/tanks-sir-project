import React, { useState } from "react";
import "./Gallery.css";
import Cards from "./Cards";
import useSlider from "./Slider";

const Gallery = () => {
	const WelcomeData = [
		{
			id: 1,
			src: "./Welcome1.jpg",
			category: "welcome",
			title: "Welcome Program",
			desc: "Students welcoming new members with a cultural dance and ceremony. Everyone enjoyed the performances and interactive sessions.",
			date: "2026-03-20",
		},
		{
			id: 2,
			src: "./Welcome2.jpg",
			category: "welcome",
			title: "Orientation Day",
			desc: "Introduction session for new students and teachers, covering campus rules, resources, and schedule planning. Students got to know each other better.",
			date: "2026-03-21",
		},
		{
			id: 3,
			src: "./Welcome3.jpg",
			category: "welcome",
			title: "Campus Tour",
			desc: "Exploring school facilities, labs, and library. Students were shown classrooms, sports area, and other important areas for academic life.",
			date: "2026-03-22",
		},
	];
	const SportData = [
		{
			id: 4,
			src: "./Sport1.jpg",
			category: "sports",
			title: "Inter College Football Match",
			desc: "Students actively participating in an exciting football match during inter-college competition.",
			date: "2026-03-22",
		},
		{
			id: 5,
			src: "./Sport2.jpg",
			category: "sports",
			title: "Annual Sports Day Race",
			desc: "A thrilling race event showcasing energy, speed, and teamwork on sports day.",
			date: "2026-03-22",
		},
		{
			id: 6,
			src: "./Sport3.jpg",
			category: "sports",
			title: "Basketball Tournament Finals",
			desc: "Final match of basketball tournament with intense competition and team spirit.",
			date: "2026-03-22",
		},
	];

	const AchievementData = [
		{
			id: 7,
			src: "./Achievement1.jpg",
			category: "achievements",
			title: "Science Exhibition Winner",
			desc: "Students receiving awards for innovative projects in the science exhibition.",
			date: "2026-03-22",
		},
		{
			id: 8,
			src: "./Achievement2.jpg",
			category: "achievements",
			title: "Topper Award Ceremony",
			desc: "Recognizing academic excellence of top-performing students.",
			date: "2026-03-22",
		},
		{
			id: 9,
			src: "./Achievement3.jpg",
			category: "achievements",
			title: "Debate Competition Champion",
			desc: "Celebrating victory in an inter-school debate competition.",
			date: "2026-03-22",
		},
	];

	const StudentData = [
		{
			id: 10,
			src: "./Student1.jpg",
			category: "students",
			title: "Classroom Learning Session",
			desc: "Students engaged in interactive and modern classroom learning.",
			date: "2026-03-22",
		},
		{
			id: 11,
			src: "./Student2.jpg",
			category: "students",
			title: "Group Project Discussion",
			desc: "Collaborative group work encouraging teamwork and creativity.",
			date: "2026-03-22",
		},
		{
			id: 12,
			src: "./Student3.jpg",
			category: "students",
			title: "Lab Practical Activity",
			desc: "Hands-on practical session in the laboratory for better understanding.",
			date: "2026-03-22",
		},
	];

	const [filter, setFilter] = useState("ALL");
	const WelcomeSlider = useSlider(WelcomeData.length);
	const SportSlider = useSlider(SportData.length);
	const AchievementSlider = useSlider(AchievementData.length);
	const StudentSlider = useSlider(StudentData.length);

	return (
		<div className="gallery-container">
			<div className="gallery-filters d-none d-md-flex justify-content-center">
				<button onClick={() => setFilter("ALL")}>ALL</button>
				<button onClick={() => setFilter("welcome")}>WELCOME</button>
				<button onClick={() => setFilter("sports")}>SPORTS</button>
				<button onClick={() => setFilter("achievements")}>ACHIEVEMENTS</button>
				<button onClick={() => setFilter("students")}>STUDENTS</button>
			</div>
			{/* WELLCOME */}

			{(filter === "ALL" || filter === "welcome") && (
				<div className="gallery-grid row">
					<div className="gallery-item col-md-4 d-none d-md-flex justify-content-center">
						<Cards
							src={WelcomeData[WelcomeSlider.FpreIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isCardDescrip={true}
							isBackCard={true}
							isFrontCard={true}
							description={WelcomeData[WelcomeSlider.FpreIndex].desc}
							Date={WelcomeData[WelcomeSlider.FpreIndex].date}
						/>
					</div>
					<div className="gallery-item col-md-4">
						<div className="Gallery-Card-Div">
							<Cards
								className="Inline-Gallery-Card"
								src={WelcomeData[WelcomeSlider.current].src}
								IsGallery={true}
								IsGalleryCard={true}
								isCardDescrip={true}
								isBackCard={true}
								isFrontCard={true}
								description={WelcomeData[WelcomeSlider.current].desc}
								Date={WelcomeData[WelcomeSlider.current].date}
							/>
						</div>
					</div>
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center">
						<Cards
							src={WelcomeData[WelcomeSlider.FnextIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isCardDescrip={true}
							isBackCard={true}
							isFrontCard={true}
							description={WelcomeData[WelcomeSlider.FnextIndex].desc}
							Date={WelcomeData[WelcomeSlider.FnextIndex].date}
						/>
					</div>

					<div className="Gallery-Button">
						<button
							className="prev-button"
							onClick={() => {
								WelcomeSlider.back();
							}}
						>
							Prev
						</button>
						<button
							className="next-button"
							onClick={() => {
								WelcomeSlider.next();
							}}
						>
							next
						</button>
					</div>
				</div>
			)}
			{/* SPORT */}
			{(filter === "ALL" || filter === "sports") && (
				<div className="gallery-grid row">
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center">
						<Cards
							src={SportData[SportSlider.FpreIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={WelcomeData[WelcomeSlider.FpreIndex].desc}
							Date={SportData[SportSlider.FpreIndex].date}
						/>
					</div>
					<div className="gallery-item col-md-4">
						<Cards
							src={SportData[SportSlider.current].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={SportData[SportSlider.current].desc}
							Date={SportData[SportSlider.current].date}
						/>
					</div>
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center">
						<Cards
							src={SportData[SportSlider.FnextIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={SportData[SportSlider.FnextIndex].desc}
							Date={SportData[SportSlider.FnextIndex].date}
						/>
					</div>

					<div className="Gallery-Button">
						<button
							className="prev-button"
							onClick={() => {
								SportSlider.back();
							}}
						>
							Prev
						</button>
						<button
							className="next-button"
							onClick={() => {
								SportSlider.next();
							}}
						>
							next
						</button>
					</div>
				</div>
			)}
			{/* ACHIEVEMENT */}
			{(filter === "ALL" || filter === "achievements") && (
				<div className="gallery-grid row">
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center">
						<Cards
							src={AchievementData[AchievementSlider.FpreIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={AchievementData[AchievementSlider.FpreIndex].desc}
							Date={AchievementData[AchievementSlider.FpreIndex].date}
						/>
					</div>
					<div className="gallery-item col-md-4">
						<Cards
							src={AchievementData[AchievementSlider.current].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={AchievementData[AchievementSlider.current].desc}
							Date={AchievementData[AchievementSlider.current].date}
						/>
					</div>
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center">
						<Cards
							src={AchievementData[AchievementSlider.FnextIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={AchievementData[AchievementSlider.FnextIndex].desc}
							Date={AchievementData[AchievementSlider.FnextIndex].date}
						/>
					</div>

					<div className="Gallery-Button">
						<button
							className="prev-button"
							onClick={() => {
								AchievementSlider.back();
							}}
						>
							Prev
						</button>
						<button
							className="next-button"
							onClick={() => {
								AchievementSlider.next();
							}}
						>
							next
						</button>
					</div>
				</div>
			)}
			{/* STUDENT */}
			{(filter === "ALL" || filter === "students") && (
				<div className="gallery-grid row">
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center">
						<Cards
							src={StudentData[StudentSlider.FpreIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={StudentData[StudentSlider.FpreIndex].desc}
							Date={StudentData[StudentSlider.FpreIndex].date}
						/>
					</div>
					<div className="gallery-item col-md-4">
						<Cards
							src={StudentData[StudentSlider.current].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={StudentData[StudentSlider.current].desc}
							Date={StudentData[StudentSlider.current].date}
						/>
					</div>
					<div className="gallery-item col-md-4  d-none d-md-flex justify-content-center ">
						<Cards
							src={StudentData[StudentSlider.FnextIndex].src}
							IsGallery={true}
							IsGalleryCard={true}
							isBackCard={true}
							isFrontCard={true}
							description={StudentData[StudentSlider.FnextIndex].desc}
							Date={StudentData[StudentSlider.FnextIndex].date}
						/>
					</div>

					<div className="Gallery-Button">
						<button
							className="prev-button"
							onClick={() => {
								StudentSlider.back();
							}}
						>
							Prev
						</button>
						<button
							className="next-button"
							onClick={() => {
								StudentSlider.next();
							}}
						>
							next
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
