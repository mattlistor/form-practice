import React from 'react';
import './App.css';

class List extends React.Component  {
  
  render(){
    let list = this.props.list.map(userObj => <li>{userObj.name}</li>)
    return(
      <div className="List">
        {list}
      </div>
    );
  } 
}

export default List;
