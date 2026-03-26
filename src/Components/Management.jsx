import React from "react";
import "./Management.css";

const Management = () => {
	return (
		<div className="Science-container ScienceImg-div">
			<div className="Management-div">
				<video autoPlay muted loop playsInline className="Management-Video">
					<source src="/Management-background.mp4" type="video/mp4" />
				</video>
				<h2 className="Science-Caption">MANAGEMENT</h2>
			</div>
			<div className="science-wrapper">
				{/* Section 1 */}
				<div className="container py-5">
					<div className="row align-items-center">
						{/* Left Content */}
						<div className="col-md-6 mb-4 mb-md-0">
							<h2 className="section-title">Management Stream</h2>
							<p className="section-text">
								Management is one of the most dynamic and practical fields of
								study. It helps students develop leadership, decision-making,
								and problem-solving skills essential for the modern business
								world. Our management program includes subjects like Accounting,
								Economics, Business Studies, and Marketing, supported by
								real-world case studies, interactive learning, and experienced
								faculty.
							</p>
						</div>

						{/* Right Image */}
						<div className="col-md-6 text-center Management-stream-img-div">
							<video
								autoPlay
								muted
								playsInline
								loop
								className="   rounded Management-stream-img "
							>
								<source src="/Management2.mp4 " type="video/mp4" />
							</video>
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
								autoPlay
								loop
								muted
								playsInline
								className="rounded shadow Collage-provide-img"
							>
								<source src="/Management1.mp4" type="video/mp4" />
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
								<h4 className="faq-question">Why Choose Management?</h4>
								<ul className="faq-list">
									<li>Develops leadership and decision-making skills</li>
									<li>
										Opens doors to diverse business and career opportunities
									</li>
									<li>
										Enhances understanding of business and economic environments
									</li>
									<li>
										Opportunity to work in management, marketing, and
										entrepreneurship
									</li>
								</ul>
							</div>

							<div className="faq-item">
								<h4 className="faq-question">Subjects Offered?</h4>
								<ul className="faq-list">
									<li>Accounting</li>
									<li>Economics</li>
									<li>Business Studies</li>
									<li>Marketing</li>
								</ul>
							</div>

							<div className="faq-item">
								<h4 className="faq-question">Career Pathway?</h4>
								<ul className="faq-list">
									<li>Business Management & Administration</li>
									<li>Accounting & Finance Careers</li>
									<li>Marketing & Sales Roles</li>
									<li>Entrepreneurship & Consulting</li>
								</ul>
							</div>
						</div>

						{/* Right Image */}
						<div className="col-md-6 text-center">
							<img
								src="./Question img.png"
								alt="Management Student"
								className="img-fluid rounded shadow"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Management;
