import React, { Component } from "react";
// import CreateHaiku from "./components/contents/CreateHaiku/CreateHaiku";
// import EditHaiku from "./components/contents/EditHaiku/EditHaiku";
import "./UserHome.css";
import HaikuService from "./CreateHaiku/HaikuService";

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class UserHome extends Component {
  constructor() {
    super()
    this.state = { haikus : []}
    this.service = new HaikuService()
    }

    componentDidMount(){
      this.service.getAll()
      .then(AllHaikus =>{
        this.setState({
          ...this.state,
          haikus : AllHaikus.haikus
      })
    }
      )
}

  

  render() {
    console.log(this.state.haikus)
    return (
      <div>
        <h1>All Haikus</h1>
        <div className="home">
        {this.state.haikus.map((haiku, idx) => {
          return <div className="haikus" key={idx}>
            <h3>{haiku.name}</h3>
            <h4>Created by: {haiku.creatorId.username}</h4>
            <p>{haiku.line1}</p>
            <p>{haiku.line2}</p>
            <p>{haiku.line3}</p>
            </div>
        })}
      </div>
      </div>
    );
  }
}

export default UserHome;
