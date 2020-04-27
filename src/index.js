import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
import { searchGif } from "./gifs";

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
  

  handleSearch = (queryStr) => {
    searchGif()
  }
   
  return (
    <>
      <Instructions />
      <div className="filters">
        <div className="form-group">
          <input type="text" placeholder="Search Gif" value={queryStr} />
          <button onClick={handleSearch}>Search</button>
          
        </div>
      </div>
      <div className="gifs">
        <Gif />
      </div>
    </>
  );
};

const Gif = () => {
  return ();
}

ReactDOM.render(<App />, document.getElementById("root"));
