import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`



function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = "53732824";

  const getMovie = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await res.json();
      // console.log(data);
      setMovie(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovie('oppenheimer');
  }, []);

  return (
    <Container>
      <MovieDisplay movie={movie} />
      <Form 
        movieSearch={getMovie}
      />
    </Container>
  );
}

export default App;
