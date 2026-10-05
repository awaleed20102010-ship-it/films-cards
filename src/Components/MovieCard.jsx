import React from "react";
import { Link } from "react-router-dom";

function MovieCard( {project}) {

  return (
    <div className="col-md-3 col-sm-6 mb-3">
      <div className="card p-3 text-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${project.poster_path}`}
          alt=""
        />

        <h3>{project.title}</h3>
        <h3>{project.release_date}</h3>
        <Link to={`/details/${project.id}`} className="btn btn-danger">
          اقرا اكثر
        </Link>
      </div>
      {/* card */}
    </div>
  );
}

export default MovieCard;
