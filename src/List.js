import React from 'react';
import './App.css';

class List extends React.Component  {

  render(){

    let list = this.props.list.slice(0, 6).map(userObj => 
      <div className="listItem" key={userObj.id}>
        <div className="name">{userObj.name.substring(0,7)}</div>
        <div className="score">{userObj.score}</div>
      </div>)
    
      return(
      <div className="List">
        
        <div className="listHeader">
          <div className="name">Name</div>
          <div className="score">Score</div>
        </div>

        {/* If the fetch request for the list hasnt loaded yet, it displays "Loading..." */}
        {this.props.list.length === 0 
        ? 
        // <div className="listItem">
        //   <div className="name">Loading...</div>
        //   <div className="score"></div>
        // </div> 
        <></>
        : 
        list}

      </div>
    );
  } 
}

export default List;
