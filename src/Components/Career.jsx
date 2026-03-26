import React from "react";
import "./Career.css";

const Career = () => {
	const careerPaths = [
		{ id: 1, title: "IT & Software", icon: "💻" },
		{ id: 2, title: "Business & Management", icon: "📊" },
		{ id: 3, title: "Healthcare", icon: "🏥" },
		{ id: 4, title: "Design & Multimedia", icon: "🎨" },
	];

	const testimonials = [
		{
			id: 1,
			name: "Ram Sharma",
			role: "Frontend Developer",
			text: "This college helped me start my career in IT.",
		},
		{
			id: 2,
			name: "Sita Karki",
			role: "Bank Officer",
			text: "Great support and internship opportunities.",
		},
	];

	return (
		<div>
			{/* HERO */}
			<section className="career-hero">
				<div className="container text-center">
					<h1>Shape Your Future With Us</h1>
					<p>Build skills, gain experience, and launch your career.</p>

					<div>
						<button className="btn btn-primary">Apply Now</button>
						<button className="btn btn-outline">Explore Programs</button>
					</div>
				</div>
			</section>

			{/* CAREER PATHS */}
			<section className="container">
				<h2 className="text-center">Career Pathways</h2>
				<div className="grid">
					{careerPaths.map((item) => (
						<div key={item.id} className="card">
							<span className="icon">{item.icon}</span>
							<h3>{item.title}</h3>
						</div>
					))}
				</div>
			</section>

			{/* STATS */}
			<section className="stats">
				<div className="container grid">
					<div>
						<h2>90%</h2>
						<p>Job Placement</p>
					</div>
					<div>
						<h2>200+</h2>
						<p>Hiring Partners</p>
					</div>
					<div>
						<h2>500+</h2>
						<p>Students Placed</p>
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="container">
				<h2 className="text-center">Success Stories</h2>
				<div className="grid">
					{testimonials.map((item) => (
						<div key={item.id} className="card">
							<p>"{item.text}"</p>
							<h4>{item.name}</h4>
							<span>{item.role}</span>
						</div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="career-cta text-center">
				<h2>Start Your Career Journey Today</h2>
				<button className="btn btn-primary">Apply Now</button>
			</section>
		</div>
	);
};

export default Career;
