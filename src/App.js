import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component  {

  state = {
    score: "",
    name: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    if(this.state.name !== ""){
      alert(this.state.name + ' ' + this.state.score);
    }
    event.preventDefault();
    this.addUser(event, this.state)
  }

  addUser = (e, user) => {
    console.log(e, user)
  }

  render(){

    return (    
      <div className="App">   
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <input className="textField" type="text" name="name" placeholder="Name..." value={this.state.name} onChange={(e) => this.handleChange(e)}/>
          <input className="textField" type="number" name="score" placeholder="Score..." value={this.state.score} onChange={(e) => this.handleChange(e)}/>
          <br></br>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  } 
}


export default App;
