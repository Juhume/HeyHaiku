import React, { Component } from 'react'
import HaikuService from './HaikuService'

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
    this.setState({[name]: value, line1check : event.target.value },this.checkSyl());
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const line1 = this.state.line1;
    const line2 = this.state.line2;
    const line3 = this.state.line3;

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
  }
  checkSyl(){
    this.state.line1check.split(' ').forEach(word=>{
       word = word.toLowerCase();                                     //word.downcase!
      if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
        word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
        word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
        console.log(word.match(/[aeiouy]{1,2}/g).length) ;    
    })
  }

  new_count(word) {
    word = word.toLowerCase();                                     //word.downcase!
    if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
      word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
      word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
      return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
  }

  render() {
   
    return (

      <div>
        <form onSubmit= {(event) => this.handleFormSubmit(event)}>

        <fieldset>
          <label>Name of your Haiku</label>
          <input type="text" name="name" value={this.state.name} onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <fieldset>
          <label>Line 1</label>
          <input type="text" name="line1" value={this.state.line1} placeholder="Remember, 5 syllables here"  onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <fieldset>
          <label>Line 2</label>
          <input type="text" name="line2" value={this.state.line2} placeholder="Remember, 7 syllables here" onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <fieldset>
          <label>Line 3</label>
          <input type="text" name="line3"  value={this.state.line3} placeholder="Remember, 5 syllables here" onChange= {(e) => this.handleChange(e)}/>
        </fieldset>

        <input type="submit" value="Create Haiku" />
      </form>
      </div>
    )
  }
}
