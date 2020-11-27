import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "e697495e";

const TitleSection = ({ title, description }) => {
  return (
    <div className="section box description">
      <h1><strong>{title}</strong></h1>
      <div>{description} </div>
    </div>
  );
};

const PhotoSection = ({ photo, alt }) => {
  return (
    <div className="section photo">
      <img key={alt} src={photo} alt={alt} />
    </div>
  );
};

const ActorsSection = ( {actors} ) => {
  let actorsArr = actors?.split(",");
  return (
    <div className="section box attributes">
      <h2><strong>Actors</strong></h2>
      {actorsArr?.map((name, index) => {
        return (
          <div key={index} className="row">
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log({ movie });
        this.setState({ movie });
      });
  }

  componentDidMount() {
    const { id } = this.props;
    console.log("id", id);
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Plot } = this.state.movie;

    return (
      <div className="movieDetail">
        <PhotoSection photo={Poster} alt={Title} />
        <TitleSection title={Title} description={Plot} />
        <ActorsSection actors={Actors} />
      </div>
    );
  }
}
