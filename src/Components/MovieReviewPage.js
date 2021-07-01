import React, { useEffect, useState } from "react";
import ExtraMovieDetails from "./ExtraMovieDetails";
import styled from "styled-components";
import { findMovie } from "../Utils/findMovie";
import { useParams } from "react-router";
import ImageAvatars from "../Utils/Avatars";
import Rating from "@material-ui/lab/Rating";
import UserForm from "./UserForm";
import Reviews from "./Reviews";
import isEmpty from "lodash/isEmpty";


function MovieReviewPage() {
  const movieUrl = useParams();
  const movieId = movieUrl.id;
  const movie = findMovie(movieUrl.id);
  const plot = movie.Plot;
  const title = movie.Title;

  const [reviews, setReviews] = useState({});


  const submitReview = (key, comment,rating) => {
    const review = {comment,rating};
    const movie = reviews[movieId] ? [...reviews[movieId], review] : [review];
    setReviews({ ...reviews, [movieId]: movie });
  };


    useEffect(()=>{
      setReviews(JSON.parse(localStorage.getItem("reviews"))||{});
    },[])


    useEffect(()=>{
        if(isEmpty(reviews)) return;
        localStorage.setItem("reviews",JSON.stringify(reviews));
    },[reviews])



  return (
    <Container>
      <h1>{title}</h1>
      <ExtraMovieDetails
        categories={["Released", "Year", "Genre", "Director", "Runtime"]}
      />
      <PlotContainer>
        <h1>Plot</h1>
        <p>{plot}</p>
      </PlotContainer>
      <Reviews reviews={reviews[movieId]}/>
      <FormContainer>
        <UserForm movieId={movieId} onSubmit={submitReview} />
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
  }
`;

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: whitesmoke;

  & p {
    width: 75%;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  margin-left: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  & textarea {
    border-radius: 3px;
    box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.2);
  }


`;

export default MovieReviewPage;
