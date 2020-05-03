import React, { Component } from 'react';
import { connect } from 'react-redux';

function withAuth(ComponentToBeRendered) {
  class Authenticated extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/signin');
      }
    }
    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
      error: state.error,
    };
  }

  return connect(mapStateToProps)(Authenticated);
}
export default withAuth;
