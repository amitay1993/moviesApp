import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MoviesData from "../MoviesData";
import findIndex from "lodash/findIndex";
import isEmpty from "lodash/isEmpty";

import { useParams } from "react-router";
import { findMovie } from "../Utils/findMovie";

const ExtraDetails = ({ match, movieId, selectedId, row, showDetailsLink }) => {
  const hasParams = isEmpty(match);
  return (
    <ExtraDetailsContainer hidden={hasParams && movieId !== selectedId}>
      <RowContainer submitForm={!hasParams}>{row}</RowContainer>
      {showDetailsLink && (
        <StyledLink to={`/movieReview/${movieId}`}>More Details...</StyledLink>
      )}
    </ExtraDetailsContainer>
  );
};

const Row = ({ categories, movie, render }) =>
     categories.map((category) => (
    <>
        {render(category, movie[category])}
    </>
  ));


const ExtraMovieDetails = ({
  showDetailsLink = false,
  id,
  selectedId,
  categories = [],
}) => {
  let movie;
  const params = useParams();

  if (isEmpty(params)) {
    movie = findMovie(id);
  } else {
    movie = findMovie(params.id);
  }


  return (
    <ExtraDetails
      match={params}
      movieId={movie.imdbID}
      selectedId={selectedId}
      row={
        <Row
          categories={categories}
          movie={movie}
          render={(category, value) => {
            if (category === "Plot") {
              return (
                <>
                  <span>{category}</span>
                  <p>{value}</p>
                </>
              );
            } else {
              return (
                <>
                  <span>{category}</span>
                  <span>{value}</span>
                </>
              );
            }
          }}
        />
      }
      showDetailsLink={showDetailsLink}
      movie={movie}
    />
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

  span:nth-child(odd) {
    text-decoration: underline;
  }

  ${(props) =>
    props.submitForm &&
    css`
     
      font-size: 1.2rem;
      display: grid;
      width: 50%;
      grid-template-columns: 4fr 2fr;
      color: white;
    `}
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
