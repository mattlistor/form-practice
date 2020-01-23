import React from 'react';
import './App.css';

class List extends React.Component  {
  

  //Sorts by high score

  render(){
    let list = this.props.list.map(userObj => <div className="listItem"><div className="name">{userObj.name.substring(0,7)}</div><div className="score">{userObj.score}</div></div>)
    return(
      <div className="List">

        <div className="listHeader">
          <div className="name">Username</div>
          <div className="score">Score</div>
        </div>

        {list}
        
      </div>
    );
  } 
}

export default List;
