import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import styled from "styled-components";
import ExtraMovieDetails from "./ExtraMovieDetails";
import {ArrowDropUp,ArrowDropDown} from "@styled-icons/material";

const MemoizedRating = React.memo(Rating);

const ArrowDirection=({direction})=>{
    return direction?<ArrowDropDown size={30}/>:<ArrowDropUp size={30}/>
}

const MoviesTable=({movies})=> {

    const [currentSelectedMovie,setCurrentSelectedMovie]=useState("")


    const selectedMovie=(movieId)=>{
        setCurrentSelectedMovie(prevState => prevState!==movieId?movieId:null);
    }

    return (
        <Container>
            <h1>IMDb: Ratings, Reviews, and Where to Watch the Best</h1>
            <MoviesContainer>
                <ul>
                    {movies.map(movie=>{
                        return (
                            <MovieDetailsContainer key={movie.imdbID}>
                                <TitleContainer onClick={() => selectedMovie(movie.imdbID)}>
                                    <li>{movie.Title}</li>
                                    <span>{movie.imdbRating}</span>
                                    <MemoizedRating name="size-small" defaultValue={1} precision={0.5} size="small" />
                                    <ArrowDirection direction={movie.imdbID===currentSelectedMovie}/>
                                </TitleContainer>
                                <ExtraMovieDetails id={movie.imdbID} selectedId={currentSelectedMovie} movie={movie}/>
                            </MovieDetailsContainer>

                        )
                    })}
                </ul>
            </MoviesContainer>

        </Container>
    );
}


const Container=styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 50vw;
 
`;

const MoviesContainer=styled.div`
  overflow: auto;
  height: 500px;
`;

const TitleContainer=styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 1rem;
  border: whitesmoke 1px solid;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  &:hover{
    cursor: pointer;
    background-color: rgba(0,0,255,0.1);
  }
`

const MovieDetailsContainer=styled.div`
  display: flex;
  flex-direction: column;
`


export default MoviesTable;