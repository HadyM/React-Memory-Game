import React from "react";

class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Name: </label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                Welcome to my pokemon memory game!
              </small>
            </div>
            <img
              onClick={this.handleClick}
              className="btn btn-primary"
              src="https://pngimg.com/uploads/pokeball/pokeball_PNG25.png"
              alt="pokeball"
              style={{ width: "200px", height: "200px" }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
