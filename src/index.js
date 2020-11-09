import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./styles.css";
import { searchGif, mapGifUrls } from './gifs';
import GifCard from './components/GifCard';

const Instructions = () => (
  <>
    <h2>Gif search excercise</h2>
    <ul>
      <li>Should search the gifs based on the query</li>
      <li>Should only search when the button is pressed</li>
      <li>Should only show the number of gifs based on the counter</li>
      <li>Minus button should decrease 1 to the counter</li>
      <li>Plus button should increase 1 to the counter</li>
      <li>
        Counter minimun should be 1 if there are gifs, if there are no gifs the
        counter should be 0
      </li>
      <li>Counter maximun should be the total number of gifs</li>
    </ul>
  </>
);

const App = () => {

  const [gifs, setGifs] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showCount, setShowCount] = useState(0);

  const handleGifSearch = async () => {
    const gifsResponse = await searchGif(searchText);
    const gifs = gifsResponse.data.map(mapGifUrls)
    if(showCount === 0) {
      setShowCount(1);
    }
    setGifs(gifs);
  }

  const onSearchInputChange = event => {
    const searchText = event.target.value;
    setSearchText(searchText);
  };

  const decreaseShowCount = () => {
    if(showCount > 0) {
      setShowCount(showCount - 1);
    }
  }

  const increaseShowCount = () => {
    if(showCount < gifs.length) {
      setShowCount(showCount + 1);
    }
  }

  const filteredGifs = gifs.filter((_, index) => index < showCount);

  return (

    <>
      <Instructions />
      <div className="filters">
        <div className="form-group">
          <input type="text" placeholder="Search Gif" value={searchText} onChange={onSearchInputChange} />
          <button onClick={handleGifSearch}>Search</button>
        </div>
      </div>
      <p>Gifs: {gifs.length}</p>
      <div>
        <button onClick={decreaseShowCount}>-</button>
        <button onClick={increaseShowCount}>+</button>
      </div>
      <div className="GifContainer">
        {
          filteredGifs.map(gif => <GifCard key={gif.key} {...gif} />)
        }
      </div>
      <p>Showing {showCount} of {gifs.length} gifs</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
