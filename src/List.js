import React from 'react';
import './App.css';

class List extends React.Component  {

  render(){

    // Shows the top {size} scores
    let size = 6
    let list = this.props.list.slice(0, size).map(userObj => 
      <div className="listItem">
        <div className="name">{userObj.name.substring(0,7)}</div>
        <div className="score">{userObj.score}</div>
      </div>)
    
      return(
      <div className="List">

        <div className="listHeader">
          <div className="name">Name</div>
          <div className="score">Score</div>
        </div>

        {list}

      </div>
    );
  } 
}

export default List;
