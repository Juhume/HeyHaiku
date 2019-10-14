import React, { Component } from 'react'
import HaikuService from './HaikuService'
import "./CreateHaiku.css"


export default class CreateHaiku extends Component {
  constructor() {
    super();
    this.state = { 
      name: '',
      line1: '',
      line2: '',
      line3: '',
      line1check:''
     };
      this.service = new HaikuService()
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value, line1check : event.target.value });
  }

  handleFormSubmit = (event) => {
    
    event.preventDefault();

  
    const name = this.state.name;
    const line1 = this.state.line1;
    const line2 = this.state.line2;
    const line3 = this.state.line3;
    console.log(this.checkHaiku(line1, line2, line3));
    if(this.checkHaiku(line1, line2, line3)=== true) {
      //console.log("Esto no es un haiku muchacho")

      this.service.add(name, line1, line2, line3)
      .then( response => {
          this.setState({
              name: "", 
              line1: "",
              line2: "",
              line3: "",
          });
          
      })
      .catch(error => {
        this.setState({
          name: name,
          line1: line1,
          line2: line2,
          line3: line3
        });
      })
     
    
    } else {

      this.setState({
        name: name,
        line1: line1,
        line2: line2,
        line3: line3
      });
      
    }
    
  }
  // checkSyl(){
  //   this.state.line1check.split(' ').forEach(word=>{
  //      word = word.toLowerCase();
  //     if(word.length <= 3) { return 1; }
  //       word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
  //       word = word.replace(/^y/, '');
  //       console.log(word.match(/[aeiouy]{1,2}/g).length);
  //   })
  // }

  // new_count(word) { 
  //   let sylArray = []
  //   word = word.toLowerCase();                                     //word.downcase!
  //   if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
  //     word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  //     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
  //     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
  // }




  checkHaiku(line1, line2,line3) {

    // console.log(haiku("The blue sky walker", "it is possible to see", "if you are a monkey"))


    return haiku(line1, line2, line3);

      function syllables(word) {
      word = word.toLowerCase();
      if(word.length <= 3) { return 1; }
        return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
                   .replace(/^y/, '')
                   .match(/[aeiouy]{1,2}/g).length;
    }

    function checkLine(sentence){
      var count = 0;
      var words = sentence.split(" ");
      
      words.map(function(val, key){
        count += syllables(val)
      });
      
      return count;
      
    }
    function haiku(a, b, c){
      
      if(!a || !b || !c){
        return {result: false, error: "Invalid input. Call haiku(line1, line2, line3)"}
      }
      
     let  result = [checkLine(a), checkLine(b), checkLine(c)];
     let expected = [5, 7, 5];
      
      if(arrayCompare(result, expected)){
        return true;
      }
      
      return {result: false, syllables:result};
    }
    function arrayCompare(a1, a2){
      return a1.length===a2.length && a1.every(function(v,i) { return v === a2[i]})
    }
    
  }

  render() {
   this.checkHaiku()
    return (
      <div className="haikuform">
        <form onSubmit= {(event) => this.handleFormSubmit(event)}>

        <fieldset>
          <label>Name of your Haiku: </label> <br></br>
          <input type="text" name="name" value={this.state.name} placeholder="Give a name to your Haiku" onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <fieldset>
          <label>Line 1: </label>
          <input type="text" name="line1" value={this.state.line1} placeholder="It begins with five"  onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <fieldset>
          <label>Line 2: </label>
          <input type="text" name="line2" value={this.state.line2} placeholder="Then seven in the middle" onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <fieldset>
          <label>Line 3: </label>
          <input type="text" name="line3"  value={this.state.line3} placeholder="Five again to end" onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <input type="submit" value="Create Haiku" />
      </form>
      </div>
    )
  }
}
