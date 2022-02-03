import React from "react";
import {Button} from "react-bootstrap";




export default function Movie({title, poster_path, vote_average, overview}) {
  
  return (
    <div className="movie"> 
    <img variant="top" src={process.env.REACT_APP_IMAGE_BASE_PATH + poster_path} alt={title} />
    <h4>{title}</h4>
    <div className="movie-info">
    <span>{vote_average}</span>
    {/* <Nav.Link href="/movie-details" id="movie-details">
            Sign Up
          </Nav.Link> */}
    <Button variant="primary" ><a href="/movie-details">Read More</a></Button>
    </div>

    </div>
  );
}
