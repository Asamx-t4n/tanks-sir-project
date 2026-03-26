import React from "react";
import "./HotelManagement.css";

const HotelManagement = () => {
	return (
		<div className="Science-container ScienceImg-div">
			<div className="Management-div">
				<video autoPlay muted loop playsInline className="Management-Video">
					<source src="/HotelManagement-background.mp4" type="video/mp4" />
				</video>
				<h2 className="Science-Caption">HOTEL MANAGEMENT</h2>
			</div>
			<div className="science-wrapper">
				{/* Section 1 */}
				<div className="container py-5">
					<div className="row align-items-center">
						{/* Left Content */}
						<div className="col-md-6 mb-4 mb-md-0">
							<h2 className="section-title">Management Stream</h2>
							<p className="section-text">
								Hotel Management is one of the most dynamic and service-oriented
								fields of study. It helps students develop leadership,
								organizational, and customer service skills essential for the
								hospitality industry. Our hotel management program includes
								subjects like Front Office Management, Food & Beverage,
								Housekeeping, and Hospitality Marketing, supported by real-world
								training, industry internships, and experienced faculty.
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
								<source src="/Hotel-video1.mp4 " type="video/mp4" />
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
								<source src="/Hotel-video2.mp4" type="video/mp4" />
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
								<h4 className="faq-question">Why Choose Hotel Management?</h4>
								<ul className="faq-list">
									<li>Develops leadership and customer service skills</li>
									<li>
										Opens doors to diverse hospitality and career opportunities
									</li>
									<li>
										Enhances understanding of hotel operations and service
										standards
									</li>
									<li>
										Opportunity to work in hotels, resorts, restaurants, and
										tourism
									</li>
								</ul>
							</div>

							<div className="faq-item">
								<h4 className="faq-question">Subjects Offered?</h4>
								<ul className="faq-list">
									<li>Front Office Management</li>
									<li>Food & Beverage Service</li>
									<li>Housekeeping</li>
									<li>Hospitality Marketing</li>
								</ul>
							</div>

							<div className="faq-item">
								<h4 className="faq-question">Career Pathway?</h4>
								<ul className="faq-list">
									<li>Hotel and Resort Management</li>
									<li>Restaurant and Food Service Careers</li>
									<li>Event and Hospitality Management</li>
									<li>Tourism and Travel Consultancy</li>
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
export default HotelManagement;
