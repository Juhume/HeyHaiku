import React, { Component } from 'react';
import HaikuService from '../contents/UserHome/CreateHaiku/HaikuService'
import "./Poems.css"


export default class Poems extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      onepoem: {}
    };
    this.service = new HaikuService()
  }

  componentDidMount() {
    this.service.getPoem()
    .then(poem => this.setState({...this.state, onepoem:poem, isLoaded:true}, () => console.log(this.state.onepoem)))
  }

  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
     return <div className="loading">
      <div class="loader book">
          <figure class="page"></figure>
          <figure class="page"></figure>
          <figure class="page"></figure>
      </div>

        <h1>Dusting off the books from the attic</h1>
   </div>
     
      // return <div className="loading"><img  alt="Poems dwarfs mining" src='https://media.giphy.com/media/YP7eWZjXYRPmSG7xOK/source.gif'></img></div>;
    } else {
      return (
        <div className="fullpoem">
          <div>
            <h1>In Hey Haiku we like all kind of poems</h1>
            <h4>So here you have a random poem without the structure of a haiku</h4>
          </div>
          <div className="background">
          <div className='poem'>
          <h3>Title of the poem: "{this.state.onepoem.newPoem.title}"</h3>
          <h3>Author: <a target="_blank" href={this.state.onepoem.newPoem.url}>{this.state.onepoem.newPoem.name}</a></h3>
          <p>{this.state.onepoem.newPoem.content}</p>
          </div>
          </div>
        </div>
      );
    }
  }
}