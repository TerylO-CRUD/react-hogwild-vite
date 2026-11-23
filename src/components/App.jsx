import React, { useState } from 'react';
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import HogForm from "./HogForm";
import hogData from "../porkers_data";


function App() {
	const [hogs, setHogs] = useState(hogData);
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("");
	const [hiddenNames, setHiddenNames] = useState([]);

	function handleAddHog(newHog) {
		setHogs([...hogs, newHog]);
	}

	function handleHideHog(name) {
		setHiddenNames([...hiddenNames, name]);
	}

	const displayedHogs = hogs
		.filter((hog) => !hiddenNames.includes(hog.name))
		.filter((hog) => !greasedOnly || hog.greased)
		.sort((a, b) => {
			if (sortBy === "name")
				return a.name.localeCompare(b.name);
			if (sortBy === "weight")
				return a.weight - b.weight;
			return 0;

		});

	return (
		<div className="App">
			<Nav />
			<Filter
				greasedOnly={greasedOnly}
				setGreasedOnly={setGreasedOnly}
				sortBy={sortBy}
				onSortChange={setSortBy}
			/>
			<HogForm onAddHog={handleAddHog} />
			<HogList hogs={displayedHogs} onHideHog={handleHideHog} />
		</div>
	);
}

export default App;