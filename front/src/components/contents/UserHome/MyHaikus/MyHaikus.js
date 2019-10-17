import React, { Component } from "react";
// import functions from './haikuUtils';
import "./MyHaikus.css";
import HaikuService from "../CreateHaiku/HaikuService";
import { TwitterShareButton } from "react-twitter-embed";
import { Link } from 'react-router-dom';


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

  deleteHaiku(id, idx) {
    this.service.deleteHaiku(id).then(deletedHaiku => {
      let newArray = [...this.state.haikus];
      newArray.splice(idx, 1);
      this.setState({
        ...this.state,
        haikus: newArray
      });
    });
  }

  render() {
    // console.log(this.props.user._id);
    if (this.state.haikus.length > 0) {
      return (
        <div className="fullhome2">
          <div>
            <h1>All haikus that you created</h1>
            <div className="home2">
              {this.state.haikus.map((haiku, idx) => (
                <div className="haikus2">
                  <h3>{haiku.name}</h3>
                  <p>{haiku.line1}</p>
                  <p>{haiku.line2}</p>
                  <p>{haiku.line3}</p>
                  <div className="centerContent">
                  <button onClick={() => this.deleteHaiku(haiku._id, idx)}>
                        <span>Click here to delete</span>
                      </button>
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
      return <div className="container2">
        <div>
        <h1>This is so sad... you don't have haikus still</h1>
        </div>
        <div classname="nohaiku">
        <h3>But don't worry, you just have to click <Link to="/createhaiku" >here</Link> </h3>
        </div>

        </div>;
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
