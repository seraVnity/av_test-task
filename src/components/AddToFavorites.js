import React from 'react';

class AddToFavorites extends React.Component {
  state = {};

  handleClick = (e) => {
    this.props.favoriteProduct(e.target.value);
  }
  
  render() {
    return (
      <div className="ui field" style={{position: "absolute", top: "4%", left: "90%", fontSize:"1.5em", color:"#FF1493"}}>
          <i className="heart outline icon" onClick={this.handleClick} ></i>
      </div>
    );
  }
}


export default AddToFavorites;