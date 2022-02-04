import React, { useEffect, useState } from "react";
import {Button} from "react-bootstrap";

export default function MovieDetails(props) {
  const[movieDetails, setMovieDetails]=useState();
  const {selectedMovie}=props;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.REACT_APP_API_DB_DETAILS}${selectedMovie}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const responseMovies = await response.json();
      // console.log(responseMovies);
      setMovieDetails(responseMovies);
    }
    fetchData();
  }, [selectedMovie]);
   
    return (
      <>
    <div className='details'>
      <img  alt="poster" src={process.env.REACT_APP_IMAGE_BASE_PATH + movieDetails?.poster_path}/>
    <div className='info'>
      <span><h2>{movieDetails?.title}</h2></span>
      <span><h3>Overview:</h3>{movieDetails?.overview}</span>
      <span><h3>Release Date:</h3>{movieDetails?.release_date}</span>
      </div> 
      <Button style={{height:"25px"}}onClick={()=>props.setSelectedMovie()}>X</Button> 
    </div>       
     
      </>
    );
  }
  
