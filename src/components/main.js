import React, { useState, useEffect } from "react";
import MovieList from "./movieList";
import MovieDetail from "./movieDetail";
import Chart from "./chart";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [message, setMessage] = useState("");

  let updateCurrentMovie = (movie) => {
    setCurrentMovie(movie);
  };

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("movies") === null) {
        setMessage("Error while connecting with API. Try again.");
      } else {
        setMovieList(JSON.parse(localStorage.getItem("movies")));
      }
    } else {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovieList(data);
          setCurrentMovie(data[0]);
          localStorage.setItem("movies", JSON.stringify(data));
        });
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar id="navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.freepnglogos.com/uploads/camera-logo-png/photography-clipart-camera-logo-pencil-color-6.png"
            width="50"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Movies
        </Navbar.Brand>
      </Navbar>
      <p>{message}</p>
      <Container>
        <Row>
          <Col xs={7}>
            <MovieList
              movies={movieList}
              updateCurrentMovie={updateCurrentMovie}
            />
          </Col>
          <Col xs={5}>
            <MovieDetail movie={currentMovie} />
          </Col>
        </Row>
        <Row>
          <Chart movies={movieList} />
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Main;
