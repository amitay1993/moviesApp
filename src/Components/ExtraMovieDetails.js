import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MoviesData from "../MoviesData";
import findIndex from "lodash/findIndex";
import isEmpty from "lodash/isEmpty";

import { useParams, useRouteMatch } from "react-router";

const ExtraDetails = ({ match, movieId, selectedId, row, showLink }) => {
  const hasParams = isEmpty(match);
  // console.log(hasParams);
  return (
    <ExtraDetailsContainer hidden={hasParams && movieId !== selectedId}>
      <RowContainer submitForm={!hasParams}>{row}</RowContainer>
      {showLink && (
        <StyledLink to={`/movieReview/${movieId}`}>More Details...</StyledLink>
      )}
    </ExtraDetailsContainer>
  );
};

const Row = ({ categories, movie }) => {
  const row = categories.map((category) => (
    <>
      <span> {`${category} :`} </span>
      <span key={category}>{movie[category]}</span>
    </>
  ));
  return row;
};

const ExtraMovieDetails = ({ id, selectedId, match, categories = [] }) => {
  let movieId;

  const params = useParams();
  console.log(params);
  // const router = useRouteMatch();
  // console.log(router.params);

  if (isEmpty(params)) {
    movieId = id;
  } else {
    movieId = params.id;
  }

  const movie =
    MoviesData[
      findIndex(MoviesData, function (o) {
        return o.imdbID === movieId;
      })
    ];

  return (
    <ExtraDetails
      match={params}
      movieId={movieId}
      selectedId={selectedId}
      row={<Row categories={categories} movie={movie} />}
      showLink={isEmpty(params)}
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
      width: 100%;
      grid-template-columns: 8fr 2fr;
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
