import React, { useState } from "react";
import styled from "styled-components";
import ExtraMovieDetails from "./ExtraMovieDetails";
import { ArrowDropUp, ArrowDropDown } from "@styled-icons/material";
import ReactStars from "react-rating-stars-component";



const MoviesTable = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState("");

  const selectMovie = (movieId) => {
      setSelectedMovie((prevState) =>
      prevState !== movieId ? movieId : null
    );
  };

  return (
    <Container>
      <h1>IMDb: Ratings, Reviews, and Where to Watch the Best</h1>
      <MoviesContainer>
        <ul>
          {movies.map((movie) => {
            return (
              <MovieDetailsContainer key={movie.imdbID}>
                <ListItem onClick={() => selectMovie(movie.imdbID)}>
                  <span>{movie.Title}</span>
                  <span>{movie.imdbRating}</span>{" "}
                  <div>
                      <ReactStars
                          edit={false}
                          isHalf={true}
                          value={parseInt(movie.imdbRating)/2}
                          count={5}
                          size={20}
                          activeColor="#ffd700"
                      />
                  </div>
                  <ArrowDirection
                    direction={movie.imdbID === selectedMovie}
                  />
                </ListItem>
                <ExtraMovieDetails
                  showDetailsLink
                  id={movie.imdbID}
                  selectedId={selectedMovie}
                  categories={["Released", "Year", "Genre", "Director"]}
                />
              </MovieDetailsContainer>
            );
          })}
        </ul>
      </MoviesContainer>
    </Container>
  );
};

const ArrowDirection = ({ direction }) => {
    return direction ? <ArrowDropDown size={30} />:<ArrowDropUp size={30} />;
};




const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 720px;
 
`;

const MoviesContainer = styled.div`
  overflow: auto;
  
`;

const ListItem = styled.li`
  display: flex;

  justify-content: space-between;
  color: white;
  padding: 1rem;
  border: whitesmoke 1px solid;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  * {
    flex: 1;
  }

  &:hover {
    cursor: pointer;
    transition: 1s;
    background-color: rgba(0, 0, 255, 0.1);
  }
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MoviesTable;
