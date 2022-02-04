import React from "react";
import {Button} from "react-bootstrap";

export default function Movie(props) {
  const {title, poster_path, vote_average,id}=props.movie;
  return (
    <div className="movie" > 
    <img variant="top" src={process.env.REACT_APP_IMAGE_BASE_PATH + poster_path} alt={title} />
    <h4>{title}</h4>
    <div className="movie-info">
    <span>{vote_average}</span>
    <Button variant="primary" onClick={()=>props.setSelectedMovie(id)}>Read More</Button>
    </div>

    </div>
  );
}
