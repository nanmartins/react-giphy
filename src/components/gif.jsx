import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy.gif";
    return(
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
