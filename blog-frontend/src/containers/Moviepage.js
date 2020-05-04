import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../services/api';
import Moment from 'react-moment';
import { deleteMovie } from '../store/actions/movies';
class Moviepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      released: '',
      plot: '',
      imageUrl: '',
      user: '',
      _id: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let movie_id = this.props.match.params.movie_id;
    apiCall('get', `/api/movies/${movie_id}`)
      .then((res) => {
        this.setState(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteMovie(this.props.currentUser.user.id, this.state._id);
    this.props.history.push('/');
  }
  render() {
    // const { movies } = this.props;
    // const { movie_id } = this.props.match.params;
    // const movie = movies.find((m) => m._id == movie_id);
    const { title, released, plot, imageUrl, user, _id } = this.state;
    console.log(this.state);
    const isCorrectUser = this.props.currentUser.user.id === user._id;
    console.log(isCorrectUser);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-2">
              <img src={imageUrl} className="card-img-top" alt="..." />
              <div className="card-body ">
                <div className="d-flex flex-row justify-content-between mb-3">
                  <h5 className="card-title ">{title}</h5>
                  <p className="card-text ">
                    <small className="text-muted">
                      Release Date -
                      <Moment format="DD MMM YYYY">{released}</Moment>
                    </small>
                  </p>
                </div>
                <h6 class="card-subtitle mb-1 text-muted">Plot</h6>
                <p className="card-text">{plot}</p>
              </div>
              {isCorrectUser && (
                <button className="btn btn-danger" onClick={this.handleDelete}>
                  Delete
                </button>
              )}
            </div>
          </div>
          <div className="img-caption"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { deleteMovie })(Moviepage);
// export default Moviepage;
