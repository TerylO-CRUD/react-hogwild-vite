import React, { useState } from "react";

const emptyForm = { name: "", weight: "", specialty: "", greased: false, image: "" };

function HogForm({ onAddHog }) {
	const [formData, setFormData] = useState(emptyForm);

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleCheckbox(e) {
		setFormData({ ...formData, greased: e.target.checked });
	}

	function handleSubmit(e) {
		e.preventDefault();
		onAddHog({
			...formData,
			weight: parseFloat(formData.weight),
			"highest medal achieved": "none",
		});
		setFormData(emptyForm);
	}

	return (
		<form className="ui form" onSubmit={handleSubmit}>
			<h2 className="ui dividing header">Add a Hog</h2>
			<div className="four fields">
				<div className="field">
					<label htmlFor="name">Name:</label>
					<input id="name" name="name" value={formData.name} onChange={handleChange} />
				</div>
				<div className="field">
					<label htmlFor="weight">Weight:</label>
					<input id="weight" name="weight" type="number" value={formData.weight} onChange={handleChange} />
				</div>
				<div className="field">
					<label htmlFor="specialty">Specialty:</label>
					<input id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
				</div>
				<div className="field">
					<label htmlFor="image">Image URL:</label>
					<input id="image" name="image" value={formData.image} onChange={handleChange} />
				</div>
			</div>
			<div className="inline field">
				<input id="greased" name="greased" type="checkbox" checked={formData.greased} onChange={handleCheckbox} />
				<label htmlFor="greased">Greased?</label>
			</div>
			<button type="submit" className="ui pink button">Add Hog</button>
		</form>
	);
}

export default HogForm;