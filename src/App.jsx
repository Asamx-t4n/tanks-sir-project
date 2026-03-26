import React from "react";
import { useState } from "react";
import "./App.css";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { MdWifiCalling } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import Home from "./Components/Home";
import MissionAndVision from "./Components/MissionAndVision";
import PrincipalMessage from "./Components/PrincipalMessage";
import OurTeams from "./Components/OurTeams";
import Science from "./Components/Science";
import Management from "./Components/Management";
import HotelManagement from "./Components/HotelManagement";
import Facilities from "./Components/Facilities";
import Gallery from "./Components/Gallery";
import Career from "./Components/Career";
import NoticePopUp from "./Components/NoticePopUp";
import Login from "./Components/Login";
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
						<button
							className="subNav-Contact-button"
							onClick={() => (window.location.href = "tel:+98425108784577")}
						>
							Contact Us
						</button>
					</div>
				</nav>
			</div>
			{/* NAVBAR */}
			<nav className="nav-container">
				<div className="row nav">
					<div className=" col-md-3  nav-Logo-Div">
						<NavLink className="nav-Menu-About" to="/">
							<img
								className="nav-Logo"
								src="/liberty collage logo.jpeg"
								alt="collage logo"
							/>
						</NavLink>
						<div>
							<HiMenu
								className="navbar-menu-sign"
								onClick={() => setIsOpenMenu((prev) => !prev)}
							/>
						</div>
					</div>
					{/* menu */}
					<div className="col-md-6  ">
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
								<div className="nav-Menu-About">ABOUT</div>
							</li>

							<ul
								className={`nav-dropdown-Menu-about  ${openAbout ? "openAboutMenu" : "closeAboutMenu"}`}
							>
								<NavLink
									onClick={() => setIsOpenAbout(false)}
									className="mission-Vision"
									to="mission&Vision"
								>
									Mission & Vision
								</NavLink>

								<NavLink
									onClick={() => setIsOpenAbout(false)}
									className="principleMessage"
									to="PrincipalMessage"
								>
									princple Message
								</NavLink>

								<NavLink
									onClick={() => setIsOpenAbout(false)}
									className="ourTeam"
									to="OurTeam"
								>
									Our Teachers
								</NavLink>
							</ul>

							<li
								className="nav-Dropdown-program"
								onClick={() => {
									setIsOpenProgram((prev) => !prev);
									setIsOpenAbout(false);
								}}
							>
								<div className="nav-Menu-Program" to="/program">
									PROGRAM
								</div>
							</li>
							<ul
								className={`nav-Dropdown-Menu-Program ${openProgram ? "openProgramMenu" : "closeProgramMenu"}`}
							>
								<NavLink
									onClick={() => setIsOpenProgram(false)}
									className="nav-Science"
									to="/Science"
								>
									SCIENCE
								</NavLink>
								<NavLink
									onClick={() => setIsOpenProgram(false)}
									className="nav-Management"
									to="/management"
								>
									MANAGEMENT
								</NavLink>
								<NavLink
									onClick={() => setIsOpenProgram(false)}
									className="nav-Hotel-M"
									to="/HotelManagement"
								>
									HOTELMANAGEMENT
								</NavLink>
							</ul>
							<NavLink className="nav-Menu-Faculties" to="/facilities">
								FACILITIES
							</NavLink>
							<NavLink className="nav-Menu-Gallery" to="/Gallery">
								GALLERY
							</NavLink>

							<NavLink className="nav-Menu-Carrer" to="/Career">
								CAREER
							</NavLink>
							<NavLink className="nav-Menu-Login" to="/Login">
								LOGIN
							</NavLink>
						</div>
					</div>

					{/* MENU */}
					<div className=" nav-Button-Div col-md-3 col-sm-6">
						<NavLink className="nav-Menu-Login-md" to="/Login">
							LOGIN
						</NavLink>
					</div>
				</div>
			</nav>
			<div>
				<div className="Notice-PopUp-Div">
					<NoticePopUp />
				</div>
				{/* ROUTES */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mission&Vision" element={<MissionAndVision />} />
					<Route path="/PrincipalMessage" element={<PrincipalMessage />} />
					<Route path="/OurTeam" element={<OurTeams />} />
					<Route path="/Science" element={<Science />} />
					<Route path="/Management" element={<Management />} />
					<Route path="/HotelManagement" element={<HotelManagement />} />
					<Route path="/Facilities" element={<Facilities />} />
					<Route path="/Gallery" element={<Gallery />} />
					<Route path="/Career" element={<Career />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</div>

			<footer className="footer-container">
				<div className="row">
					<div className="col-md-3">
						<div className="footer-logo-div">
							<img
								className="footer-logo"
								src="liberty collage logo.jpeg"
								alt="collageLogo"
							/>
						</div>
						<div className="footer-media-links-div">
							<h1 className="footer-caption-follow">Follow</h1>
							<div className="footer-icons-div">
								<FaFacebookF className="footer-icons1" />
								<FaTiktok className="footer-icons2" />
								<GrYoutube className="footer-icons3" />
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<h3 className="footer-UseFull-Links-Caption">Usefull Liks</h3>
						<div className="footer-UseFull-Links-Group">
							<p className="footer-About">About</p>
							<p className="footer-Program">Program</p>
							<p className="footer-Faculties">Faculties</p>
							<p className="footer-Gallery">Gallery</p>
						</div>
					</div>
					<div className="col-md-3">
						<h3 className="footer-Caption-Contact">Contact</h3>
						<div className="footer-Contact-List-Div">
							<p className="footer-Contact-Num">
								<MdWifiCalling />
								9706375558/023691317
							</p>
							<p className="footer-Contact-Email">
								<HiOutlineMail />
								info@libertysscollege@gamil.com
							</p>
							<p className="footer-Contact-Location">
								<MdLocationOn />
								Purano Bhadrapur Road Birtamode-5
							</p>
						</div>
					</div>
					<div className="col-md-3">
						<h3 className="footer-Map-Caption">Map</h3>
						<div className="footer-map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d904.6077543940204!2d87.9913553947217!3d26.639652047496387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2snp!4v1770794992232!5m2!1sen!2snp"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="location-map"
							></iframe>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
