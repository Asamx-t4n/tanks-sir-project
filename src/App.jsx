import React from "react";
import { useState } from "react";
import "./App.css";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { NavLink, Route, Routes } from "react-router-dom";
const App = () => {
	const [openAbout, setIsOpenAbout] = useState(false);
	const [openProgram, setIsOpenProgram] = useState(false);
	const [openMenu, setIsOpenMenu] = useState(false);
	return (
		<div className="main-container">
			{/* SUBNAVBAR */}
			<div className="subNav-Container">
				<nav className="row sabNav">
					<div className="col-12 col-md-6 col-sm-12 sabNav-contact">
						<tel>
							<IoCallSharp />
							9842510177/9842510177
						</tel>
						<email>
							<MdEmail /> samratbhattarai6789@gmail.com
						</email>
					</div>
					<div className="col-12 col-md-6 col-sm-12 subNav-Button">
						<button className="subNav-Contact-button">contact us</button>
					</div>
				</nav>
			</div>
			{/* NAVBAR */}
			<nav className="nav-container">
				<div className="row nav">
					<div className=" col-3  nav-Logo-Div">
						<img
							className="nav-Logo"
							src="/liberty collage logo.jpeg"
							alt="collage logo"
						/>
					</div>
					{/* menu */}

					<div className="col-6 ">
						<div
							className={`nav-Menu-Div smallSize ${openMenu ? "openSmallMenu" : "closeSmallMenu"}`}
						>
							<li
								className="nav-Dropdown-about"
								onClick={() => {
									setIsOpenProgram(false);
									setIsOpenAbout((prev) => !prev);
								}}
							>
								<NavLink className="nav-Menu-About" to="/">
									ABOUT
								</NavLink>
							</li>

							<ul
								className={`nav-dropdown-Menu-about  ${openAbout ? "openAboutMenu" : "closeAboutMenu"}`}
							>
								<NavLink className="mission-Vision" to="mission&Vision">
									Mission & Vision
								</NavLink>

								<NavLink className="directorMessage" to="directorMessage">
									Director Message
								</NavLink>

								<NavLink className="principleMessage" to="principleMessage">
									princple Message
								</NavLink>

								<NavLink className="ourTeam" to="ourTeam">
									Our Team
								</NavLink>
							</ul>

							<li
								className="nav-Dropdown-program"
								onClick={() => {
									setIsOpenProgram((prev) => !prev);
									setIsOpenAbout(false);
								}}
							>
								<NavLink className="nav-Menu-Program" to="/program">
									PROGRAM
								</NavLink>
							</li>
							<ul
								className={`nav-Dropdown-Menu-Program ${openProgram ? "openProgramMenu" : "closeProgramMenu"}`}
							>
								<NavLink className="nav-Science" to="/science">
									SCIENCE
								</NavLink>
								<NavLink className="nav-Management" to="/management">
									MANAGEMENT
								</NavLink>
								<NavLink className="nav-Hotel-M" to="/hotelManagement">
									HOTELMANAGEMENT
								</NavLink>
							</ul>
							<NavLink className="nav-Menu-Faculties" to="/faculties">
								FACULTIES
							</NavLink>
							<NavLink className="nav-Menu-Gallery" to="/gallery">
								GALLERY
							</NavLink>
							<NavLink className="nav-Menu-Notice" to="/notice">
								NOTICE
							</NavLink>
							<NavLink className="nav-Menu-Carrer" to="/carrer">
								CARRER
							</NavLink>
							<NavLink className="nav-Menu-Login" to="/carrer">
								LOGIN
							</NavLink>
						</div>
					</div>

					{/* MENU */}
					<div className=" nav-Button-Div col-2 ">
						<button className="nav-Button">login</button>
						<div>
							<HiMenu
								className="navbar-menu-sign"
								onClick={() => setIsOpenMenu((prev) => !prev)}
							/>
						</div>
					</div>
				</div>
			</nav>
			{/* HERO-SECTION */}
			<div className="container-heroSection">
				<img
					className="hero-Section-bg-img"
					src="/Collage.jpg"
					alt="colllage-img"
				/>
				<div className="hero-Section-bg-overlap"></div>
				<div className="hero-Section-Caption-div">
					<h1 className="hero-Section-Caption">
						''A GLOBAL ATMOSPHERE AT A REDUCED SCALE''
					</h1>
					<button className="hero-section-button">ENROLL NOW</button>
				</div>
				<div className="hero-Section-box">
					<div className="hero-section-box1">
						<div className="hero-section-box1-icon-div">
							<GiTeacher />
						</div>
						<p className="hero-section-box1-caption">EXPERIENCE 10+</p>
					</div>
					<div className="hero-section-box2">
						<div className="hero-section-box2-icon-div">
							<PiStudentBold />
						</div>
						<p className="hero-section-box2-caption">STUDENT 600+</p>
					</div>

					<div className="hero-section-box3">
						<div className="hero-section-box3-icon-div">
							<GiSpellBook />
						</div>
						<p className="hero-section-box3-caption">PROGRAMS 3+</p>
					</div>
					<div className="hero-section-box4">
						<div className="hero-section-box4-icon-div">
							<FaUniversity />
						</div>
						<p className="hero-section-box4-caption">YEAR OF EXPERIENCE 10+</p>
					</div>
				</div>
			</div>
			{/* ROUTES */}
			<Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
		</div>
	);
};

export default App;
