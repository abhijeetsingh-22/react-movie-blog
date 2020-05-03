import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../component/Homepage';
import AuthForm from '../component/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/error';
import withAuth from '../hocs/withAuth';
import MovieForm from './MovieForm';
const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} {...props} />
        <Route
          exact
          path="/signup"
          render={() => {
            return (
              <AuthForm
                removeError={props.removeError}
                heading={'Become member now'}
                signup
                onAuth={props.authUser}
                buttonText={'Sign Up'}
                error={props.error}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signin"
          render={() => {
            return (
              <AuthForm
                {...props}
                removeError={props.removeError}
                heading={'Welcome Back Please Login'}
                onAuth={props.authUser}
                buttonText={'Login'}
                error={props.error}
              />
            );
          }}
        />
        <Route path="/users/:id/movies/new" component={withAuth(MovieForm)} />
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    error: state.error,
  };
};
export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
