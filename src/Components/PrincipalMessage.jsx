import React from "react";
import "./PrincipalMessage.css";

const PrincipalMessage = () => {
	return (
		<section className="principal-section">
			<div className="principal-container">
				<div className="principal-image">
					<img src="/Principal Img.jpg" alt="Principal" />
				</div>

				<div className="principal-content">
					<h1>Message from the Principal</h1>
					<p>
						It gives me immense pleasure to welcome you to our institution. Our
						college is committed to academic excellence, discipline, and
						holistic development of every student.
					</p>

					<p>
						We strive to create an environment that encourages innovation,
						leadership, and lifelong learning. I invite you to be part of this
						journey towards success and excellence.
					</p>

					<h3 className="principal-name">Dr. Ram Prasad Sharma</h3>
					<span className="principal-title">Principal</span>
				</div>
			</div>
		</section>
	);
};

export default PrincipalMessage;
