import React, { Component } from "react";
// import functions from './haikuUtils';
import "./MyHaikus.css";
import HaikuService from "../CreateHaiku/HaikuService";
import { TwitterShareButton } from "react-twitter-embed";

export default class MyHaikus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haikus: []
    };
    this.service = new HaikuService();
  }

  componentDidMount() {
    this.service.userHaikus(this.props.user._id).then(haikus => {
      this.setState(
        {
          ...this.state,
          haikus: haikus.haikus
        }
        // () => console.log(this.state.haikus.haikus)
      );
    });
  }
  // changeValue(e){
  //   this.setState({...this.state, value:e.target.value})
  // }

  // createHaiku(e){
  //   e.preventDefault()

  // }

  render() {
    // console.log(this.props.user._id);
    if (this.state.haikus.length > 0) {
      return (
        <div className="fullhome2">
          <div>
            <h1>All haikus that you created</h1>
            <div className="home2">
              {this.state.haikus.map((haiku, idx) => (
                <div className="haikus">
                  <h3>{haiku.name}</h3>
                  <p>{haiku.line1}</p>
                  <p>{haiku.line2}</p>
                  <p>{haiku.line3}</p>
                  <div className="centerContent">
                    <div className="selfCenter">
                      <TwitterShareButton
                        url="https://heyhaiku.herokuapp.com"
                        options={{
                          text: `Thanks to @heyhaikuweb I created this haiku! ${haiku.line1}, ${haiku.line2}, ${haiku.line3}`,
                          via: "heyhaikuweb",
                          size: "large",
                          hashtags: "Theartofhaiku"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container"></div>;
    }
  }
}

{
  /* <form>
          <input onChange={(e)=> this.changeValue(e)} type='text' placeholder='word'></input>
          <button onClick={(e)=> this.createHaiku(e)}></button>
        </form>
        <div className="createdhaiku">

        </div> */
}
