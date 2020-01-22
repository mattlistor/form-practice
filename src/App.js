import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component  {

  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render(){

    return (    
      <div className="App">   
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <input className="textField" type="text" name="name" placeholder="Name" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  } 
}


export default App;
