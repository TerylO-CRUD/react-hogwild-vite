import React, { useState } from "react";

function HogCard({ hog, onHide }) {
	const [showDetails, setShowDetails] = useState(false);

	function toggleDetails() {
		setShowDetails(!showDetails);
	}

	function handleHide() {
		onHide(hog.name);
	}

	return (
		<div aria-label="hog card" className="ui card" onClick={toggleDetails}>
			<div className="image">
				<img src={hog.image} alt={"Photo of " + hog.name} />
			</div>
			<div className="content">
				<h3 className="header">{hog.name}</h3>
				{showDetails && (
					<div className="description">
						<p>Specialty: {hog.specialty}</p>
						<p>Weight: <span>{hog.weight}</span></p>
						<p>{hog.greased ? "Greased" : "Nongreased"}</p>
						<p className="achievementText">
							Highest medal: <span>{hog["highest medal achieved"]}</span>
						</p>
					</div>
				)}
			</div>
			<div className="extra content">
				<button type="button" className="ui button" onClick={handleHide}>
					Hide Me
				</button>
			</div>
		</div>
	);
}

export default HogCard;