import React from 'react';
import List from './List.js';
import './App.css';

class App extends React.Component  {

  state = {
    score: "",
    name: "",
    list: []
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.name !== "" && this.state.score !== ""){
      const newUser = {score: parseInt(this.state.score), name: this.state.name}
      this.setState({
        score: "",
        name: "",
        list: [newUser, ...this.state.list]
      });
    }
    
  }

  render(){
    return (    
      <div className="App">   
  
        <form className="form" onSubmit={(e) => this.handleSubmit(e, this.state)}>
          <input className="textField" id="inputField" type="text" name="name" placeholder="Name..." value={this.state.name} onChange={(e) => this.handleChange(e)}/>
          <input className="textField" id="inputField" type="number" name="score" placeholder="Score..." value={this.state.score} onChange={(e) => this.handleChange(e)}/>
          <br></br>
          <input className="submit" type="submit" value="Submit" />
        </form>
        <List list={this.state.list}/>
      </div>
    );
  } 
}


export default App;
