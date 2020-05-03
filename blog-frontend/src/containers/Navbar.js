import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import logo from '../assets/logo-new.svg';
class Navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    const { currentUser } = this.props;
    return (
      <>
        {' '}
        <nav className="navbar navbar-expand d-flex justify-content-between navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt=""
                style={{ height: '50px' }}
              />
            </Link>
            {currentUser.isAuthenticated ? (
              <ul className="nav navbar-nav nav-right">
                <li>
                  <Link to={`/users/${currentUser.user.id}/movies/new`}>
                    Add New Movie
                  </Link>
                </li>
                <li>
                  <a onClick={this.logout}>Logout</a>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav nav-right">
                <li className="nav-item">
                  <Link to="/signup" className="nav-link ml-4">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link ml-4">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto">
              <li className="nav-item active">
                <a className="nav-link mr-4" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav> */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { logout })(Navbar);
