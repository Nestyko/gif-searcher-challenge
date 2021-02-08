import ReactDOM from "react-dom";
import React from "react";

import "./styles.css";

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
        Every gif should have a reserved square space of 50px where they will be
        rendered but they need to retain their original ratio. For example: if
        the gif dimension is 100x90 (ratio 10:9) then you need to render it with
        50x45 so it keeps the ratio 10:9
      </li>
      <li>
        There should be certain space between the gifs (for example 5px) on the
        sides, top and bottom.{" "}
      </li>
      <li>
        {" "}
        Extra points: get creative with the gifs styles, anything you can do to
        show off your CSS skills is welcome{" "}
      </li>
      <li>Counter:</li>
      <ul>
        <li>Should only show the number of gifs based on the counter</li>
        <li>Minus button should decrease 1 to the counter</li>
        <li>Plus button should increase 1 to the counter</li>
        <li>
          Counter minimun should be 1 if there are gifs, if there are no gifs
          the counter should be 0
        </li>
        <li>Counter maximun should be the total number of gifs</li>
      </ul>
    </ul>
  </>
);

const App = () => {
  return (
    <>
      <Instructions />
      <div className="filters">
        <div className="form-group">
          <input type="text" placeholder="Search Gif" />
          <button>Search</button>
          <button>-</button>
          <span> 0 </span>
          <button>+</button>
        </div>
      </div>
      <div>Gifs goes here</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
