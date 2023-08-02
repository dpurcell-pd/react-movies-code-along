import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5rem;
  color: blue;
  font-style: oblique;
  text-decoration: underline;
`;

const Genre = styled.h1`
  margin: -25px;
`;

const Poster = styled.div`
  opacity: 1;
  &:hover {
    opacity: 0.9;
    cursor: grab;
  }
`;

const Background = styled.div`
  background-image: url('https://i0.wp.com/batman-news.com/wp-content/uploads/2013/08/BlackWhite1.jpg?w=1500&quality=80&strip=info&ssl=1');
`;


function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <Background>
        <Title>
          <h1>{movie.Title}</h1>
        </Title>
        <Genre>
          <h3>{movie.Genre}</h3>
        </Genre>
        <Poster>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </Poster>
        <h2>{movie.Year}</h2>
      </Background>
    );
  };
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  return movie? loaded() : loading();
}

export default MovieDisplay;
