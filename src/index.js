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

class App extends React.Component {
  state = {
    gifList: []
  };

  addNewGif = (gifData) => {
    this.setState( prevState => ({
      gifList : [...gifData],
    }));
    //console.log("After add", this.state.gifList);
  };

  render() {
    return (
      <>
        <Instructions />
        <div className="filters">
          <Form onSubmit={this.addNewGif}/>
        </div>
        <div className="gifs">
          <GifList data={this.state.gifList}/>
        </div>
      </>
    );
  }
};

const GifList = (props) => (
	<div>
    {console.log(props.data)}
  	{props.data.map(elem => <Gif key={elem.id} {...elem}/>)}
	</div>
);

class Form extends React.Component {
  state = { 
    queryStr: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(this.state.queryStr);
    // call API
    const resp = await searchGif(this.state.queryStr);
    this.props.onSubmit(resp.data)
    this.setState({queryStr: ''})
  }
  render() {
    return (
      <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <input type="text" 
            onChange={event => this.setState({queryStr : event.target.value})}
            placeholder="Search Gif" 
            value={this.state.queryStr} />
            <button>Search</button>
          </form>  
          </div>
    );
  }
}

class Gif extends React.Component {
  render() {
    const gif = this.props
    console.log(gif);
    return (
      <div>
        <img src={gif.images.fixed_height_small.url} />
        <div className="info">
          <div className="name">{gif.title}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
