import React from "react";

class Login extends React.Component {
  state = {};

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                Welcome to my Pokemon Memory Game
              </small>
            </div>
            <button onClick={this.handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
