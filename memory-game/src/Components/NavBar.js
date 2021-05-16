import React from "react";

class NavBar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Pokemon Memory Game</div>
        <div className="name">{name}</div>
        <div className="score">Score: {score}</div>
      </div>
    );
  }
}

export default NavBar;
