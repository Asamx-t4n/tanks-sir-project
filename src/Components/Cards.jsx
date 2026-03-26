import React from "react";
import "./Cards.css";
import { IoCall } from "react-icons/io5";

const Cards = ({
	src,
	name,
	formerStudent,
	description,
	Education,
	Button,
	IsGallery,
	IsGalleryCard,
	Date,
	isCardDescrip,
	isBackCard,
	isFrontCard,
}) => {
	return (
		<div className={`Card ${IsGalleryCard ? "GalleryCard" : ""}`}>
			<div className="Card-inner">
				<div className={`${isFrontCard ? "Front-Card" : ""}`}>
					<div className="card-Img-Div">
						<img
							className={`card-Img ${IsGallery ? "Gallery-img" : ""}`}
							src={src}
							alt="card-img"
						/>
					</div>
					<div className="card-name-former-Div">
						<p className="card-name">{name}</p>
						<p className="card-formerStudent">{formerStudent}</p>
						{Education && <p className="Card-Eductaion">{Education}</p>}
						{Button && (
							<div className="Card-Button">
								<button>
									<a href={`tel:${Button}`}></a>
									<IoCall />
									Call Now
								</button>
							</div>
						)}
					</div>
				</div>

				<div
					className={`card-Description-Div ${isBackCard ? "Back-Card" : ""}`}
				>
					{Date && <p className="Card-date">Date:{Date}</p>}
					<p className={`card-Description ${isCardDescrip ? "Card-Desc" : ""}`}>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Cards;
