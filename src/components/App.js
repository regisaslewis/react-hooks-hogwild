import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";

import hogs from "../porkers_data";

function App() {

	const [list, setList] = useState(hogs);
	
	function handleFilter() {
		const filteredList = hogs.filter(gHog => gHog.greased === true);
		setList(filteredList);
	}

	function handleUnfilter() {
		setList(hogs)
	}

	function handleGreaseless() {
		const ungreasedList = hogs.filter(ugHog => ugHog.greased !== true);
		setList(ungreasedList);
	}
	
	function handleNameSort() {
		const nameSortList = [...list].sort((a, b) => a.name > b.name ? 1 : -1);
		setList(nameSortList);
	}
	
	function handleWeightSort() {
		const weightSortList = [...list].sort((a, b) => a.weight > b.weight ? 1 : -1);
		setList(weightSortList);
	}

	return (
		<div className="App">
			<Nav />
			<button onClick={handleFilter}>Show Only Greased Pigs</button>
      <button onClick={handleGreaseless}>Show Only Ungreased Pigs</button>
      <button onClick={handleUnfilter}>Show All Pigs</button>
      <br />
      <button onClick={handleNameSort}>Sort By Name</button>
      <button onClick={handleWeightSort}>Sort By Weight</button>
			<Tiles hogs={list}/>
		</div>
	);
}

export default App;
