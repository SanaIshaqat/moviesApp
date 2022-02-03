import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import Main from "./components/Main";

function App() {

  return (
    <>
    <Main />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
