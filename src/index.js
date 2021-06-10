import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

import "./styles.css";

import { searchGif, mapGifUrls } from "./gifs";
import GifItem from "./GifItem";

const Instructions = () => (
	<>
		<h2>Gif search excercise</h2>
		<ul>
			<li>Should search the gifs based on the query</li>
			<li>Should only search when the button is pressed</li>
			<li>Should render the gifs below the filters div</li>
			<li>Design should be responsive</li>
			<li>
				{" "}
				Every gif should have a reserved square space of 50px where they
				will be rendered but they need to retain their original ratio. For
				example: if the gif dimension is 100x90 (ratio 10:9) then you need
				to render it with 50x45 so it keeps the ratio 10:9
			</li>
			<li>
				There should be certain space between the gifs (for example 5px) on
				the sides, top and bottom.{" "}
			</li>
			<li>
				{" "}
				Extra points: get creative with the gifs styles, anything you can do
				to show off your CSS skills is welcome{" "}
			</li>
			<li>Counter:</li>
			<ul>
				<li>Should only show the number of gifs based on the counter</li>
				<li>Minus button should decrease 1 to the counter</li>
				<li>Plus button should increase 1 to the counter</li>
				<li>
					Counter minimun should be 1 if there are gifs, if there are no
					gifs the counter should be 0
				</li>
				<li>Counter maximun should be the total number of gifs</li>
			</ul>
		</ul>
	</>
);

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [gifs, setGifs] = useState([]);

	const onClickHandler = () => {
		// validator
		const txt = searchTerm.trim();
		if (txt === "" || txt === " ") return;

		// fetching the gifs
		searchGif(searchTerm).then((res) => setGifs(res.data));

		// clearing the input
		setSearchTerm("");
	};

	const renderGifs = gifs.map((gif) => {
		return <GifItem gif={mapGifUrls(gif)} key={gif.id} />;
	});

	return (
		<>
			<Instructions />
			<div className="filters">
				<div className="form-group">
					<input
						type="text"
						placeholder="Search Gif"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button onClick={onClickHandler}>Search</button>
					<button>-</button>
					<span> 0 </span>
					<button>+</button>
				</div>
			</div>
			<div className="gifs-results">{gifs.length > 0 && renderGifs}</div>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
