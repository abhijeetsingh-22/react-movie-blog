import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMovie } from '../store/actions/movies';
class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      released: '',
      plot: '',
      imageUrl: '',
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
    console.log('handlesubmit');
    this.props
      .postNewMovie(this.state)
      .then(() => this.props.history.push('/'));
  }
  render() {
    const { title, released, plot, imageUrl } = this.state;
    const { error } = this.props;
    return (
      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Add new Movie!!!</h2>
            {error.message && (
              <div className="alert alert-danger">{error.message}</div>
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="released">Release Date</label>
                <input
                  type="date"
                  name="released"
                  value={released}
                  className="form-control"
                  id="released"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="plot">Plot</label>
                <textarea
                  name="plot"
                  id="plot"
                  rows="5"
                  id="plot"
                  value={plot}
                  className="form-control"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image-url">Image Url</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { postNewMovie })(MovieForm);
