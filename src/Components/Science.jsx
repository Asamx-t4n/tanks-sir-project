import React from "react";
import "./Science.css";

const Science = () => {
	return (
		<div className="Science-container ScienceImg-div">
			<div className="ScienceImg-div">
				<video autoPlay muted loop playInline className="Science-img">
					<source src="/Science-background.mp4" type="video/mp4" />
				</video>
				<h2 className="Science-Caption">SCIENCE</h2>
			</div>
			<div className="science-wrapper">
				{/* Section 1 */}
				<div className="container py-5">
					<div className="row align-items-center">
						{/* Left Content */}
						<div className="col-md-6 mb-4 mb-md-0">
							<h2 className="section-title">Science Stream</h2>
							<p className="section-text">
								Science is one of the most powerful and exciting fields of
								study. It helps students understand the world through
								experiments, research, and logical thinking. Our science program
								includes Physics, Chemistry, Biology, and Computer Science with
								modern laboratories and experienced teachers.
							</p>
						</div>

						{/* Right Image */}
						<div className="col-md-6 text-center Science-stream-img-div">
							<video
								loop
								autoPlay
								muted
								playsInline
								className="img-fluid rounded shadow Science-stream-img"
							>
								<source src="/Science-video1.mp4" type="video/mp4" />
							</video>
							{/* */}
						</div>
					</div>
				</div>

				{/* Section 2 */}
				<div className="container py-5">
					<div className="row align-items-center flex-md-row-reverse">
						{/* Right Content */}
						<div className="col-md-6 mb-4 mb-md-0">
							<h2 className="section-title">What Our College Provides</h2>
							<p className="section-text">
								We provide a flexible learning environment with Morning, Day,
								and Evening shifts for students. Our college offers modern
								classrooms, well-equipped laboratories, a friendly academic
								atmosphere, and career guidance support to help every student
								achieve success.
							</p>
						</div>

						{/* Left Image */}
						<div className="col-md-6 text-center Collage-provide-img-div">
							<video
								loop
								muted
								autoPlay
								playsInline
								className="img-fluid rounded shadow Collage-provide-img"
							>
								<source src="/Science-video2.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
			<div className="science-info-wrapper py-5">
				<div className="container">
					<div className="row align-items-center">
						{/* Left Content */}
						<div className="col-md-6 mb-4 mb-md-0">
							<div className="faq-item">
								<h4 className="faq-question">Why Choose Science?</h4>
								<ul className="faq-list">
									<li>Develops analytical and problem-solving skills</li>
									<li>Opens doors to multiple career options</li>
									<li>Enhances understanding of the natural world</li>
									<li>Opportunity to work in innovative technologies</li>
								</ul>
							</div>

							<div className="faq-item">
								<h4 className="faq-question">Subjects Offered?</h4>
								<ul className="faq-list">
									<li>Physics</li>
									<li>Chemistry</li>
									<li>Biology</li>
									<li>Computer Science</li>
								</ul>
							</div>

							<div className="faq-item">
								<h4 className="faq-question">Career Pathway?</h4>
								<ul className="faq-list">
									<li>Engineering (Civil, Mechanical, IT)</li>
									<li>Medical and Health Sciences</li>
									<li>Research and Academia</li>
									<li>Data Science & IT Careers</li>
								</ul>
							</div>
						</div>

						{/* Right Image */}
						<div className="col-md-6 text-center">
							<img
								src="./Question img.png"
								alt="Science Student"
								className="img-fluid rounded shadow"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Science;
