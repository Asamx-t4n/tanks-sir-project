import React from "react";
import "./Login.css";

const Login = () => {
	return (
		<div className="container login-container">
			<div className="row justify-content-center align-items-center min-vh-100">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="login-card">
						<div className="login-logo">
							<img
								className="nav-Logo"
								src="/liberty collage logo.jpeg"
								alt="collage logo"
							/>
						</div>

						<h2 className="login-title">Login</h2>

						<form>
							<div className="form-group mb-3">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter your email"
								/>
							</div>

							<div className="form-group mb-3">
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Enter your password"
								/>
							</div>

							<button type="submit" className="login-btn w-100">
								Login
							</button>
						</form>

						<p className="login-footer">
							Don't have an account? <span>Register</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
