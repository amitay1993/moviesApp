import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MoviesData from "../MoviesData";
import findIndex from "lodash/findIndex";

const ExtraDetails=({match,movieId,selectedId,row,showLink})=>{
    return(
        <ExtraDetailsContainer hidden={!match && movieId !== selectedId}>
        <RowContainer>
            {row}
        </RowContainer>
            {showLink &&  <StyledLink to={`/movieReview/${movieId}`}>More Details...</StyledLink>}
    </ExtraDetailsContainer>
    )
}

const ExtraMovieDetails = ({ id, selectedId,match }) => {
    console.log(match);
  const categories = ["Released", "Year", "Genre", "Director"];
    let movieId;
    if(match){
        movieId = match.params.id;
    }else{
        movieId=id;
    }

  const movie =
      MoviesData[
          findIndex(MoviesData, function (o) {
            return o.imdbID === movieId;
          })];

    const row = categories.map((category) => (
        <>
            <span> {`${category} :`} </span>
            <span key={category}>{movie[category]}</span>

        </>
));




  return ( <ExtraDetails match={match} movieId={movieId} selectedId={selectedId} row={row} showLink={!match}/>
  );
};

const ExtraDetailsContainer = styled.div`
  padding: 1rem;
`;

const RowContainer = styled.div`
  color: white;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 4fr 2fr;
  width: 60%;
  gap: 0.5rem;
  text-align: left;
  
  span:nth-child(odd){
    text-decoration: underline;
  }
  
  
`;

const StyledLink = styled(Link)`
  color: lightgray;
  padding: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;

  &:hover {
    color: lightblue;
  }
`;

export default ExtraMovieDetails;
