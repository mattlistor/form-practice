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
    if (event.target.name === "score"){
      if (event.target.value.toString().length <= 4){

        this.setState({score: event.target.value});
      }
    }
    if (event.target.name === "name"){
        this.setState({name: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.name !== "" && this.state.score !== ""){
      const newUser = {score: parseInt(this.state.score), name: this.state.name}
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({user: newUser})
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          // Clears these feilds
          score: "",
          name: "",
          // Adds to the list and sorts it by score descending
          list: [...this.state.list, newUser].sort((a, b) => {return b.score-a.score})
        });
      });
    }  
  } 

  componentDidMount = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((myJson) => {
      this.setState({ list: myJson.sort((a, b) => {return b.score-a.score}) });
    })
  }

  render(){
    
    return (  
      <div className="App">  
        <form className="form" onSubmit={(e) => this.handleSubmit(e, this.state)}>
          <div className="header">High Score List</div> 
          <input className="textField" type="text" name="name" placeholder="Name..." value={this.state.name} onChange={(e) => this.handleChange(e)}/>
          <input className="scoreField" type="number" name="score" maxLength="4" placeholder="Score..." value={this.state.score} onChange={(e) => this.handleChange(e)}/>
          <br></br>
          <input className="submit" type="submit" value="Submit" />
        </form>
        <List list={this.state.list}/>
      </div>

    );
  } 
}

export default App;
