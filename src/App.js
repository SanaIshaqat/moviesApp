import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Main from "./components/Main";
import "./App.css";

function App() {

  return (
    <>
    {/* <Main /> */}
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
