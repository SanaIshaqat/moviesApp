import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Header from "./Header";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";
import "../App.css";

function Main() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const[selectedMovie,setSelectedMovie]=useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.REACT_APP_MOVIE_DB_API}${process.env.REACT_APP_API_KEY}`
      );
      const responseMovies = await response.json();
      // console.log(responseMovies);
      setMovies(responseMovies.results);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=f9b47a06d4fc5c436ca2806b587f72cb&query=" +
        searchTerm
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="input">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h2>Find Your Movie:</h2>
            </Form.Label>
            <Form.Control
              className="inputTag"
              type="text"
              placeholder="Search movie name"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
      </div>
      {selectedMovie && <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
      <div className="container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie}/>)}
      </div>
    </>
  );
}

export default Main;
