import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let type = this.props.signup ? 'signup' : 'signin';
    this.props
      .onAuth(type, this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      heading,
      buttonText,
      signup,
      history,
      removeError,
      error,
    } = this.props;

    history.listen(() => {
      removeError();
      this.setState({
        email: '',
        username: '',
        password: '',
        profileImageUrl: '',
      });
    });
    return (
      <div className="container pt-4 ">
        <div className="row justify-content-md-center ">
          <div className="col-9  col-md-10 col-lg-7 col-xl-6">
            <h2>{heading}</h2>
            {error.message && (
              <div className="alert alert-danger">{error.message}</div>
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              {signup && (
                <>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      className="form-control"
                      type="text"
                      value={username}
                      name="username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="profileImageUrl">Profile Image Url</label>
                    <input
                      className="form-control"
                      type="text"
                      value={profileImageUrl}
                      name="profileImageUrl"
                      onChange={this.handleChange}
                    />
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-primary">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
