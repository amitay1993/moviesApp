import React from "react";
import ExtraMovieDetails from "./ExtraMovieDetails";
import styled from "styled-components";
import { findMovie } from "../Utils/findMovie";
import { useParams } from "react-router";
import ImageAvatars from "../Utils/Avatars";
import Rating from "@material-ui/lab/Rating";
import UserForm from "./UserForm";
import Reviews from "./Reviews";

function MovieReviewPage() {
  const movieUrl = useParams();
  const movie = findMovie(movieUrl.id);
  const plot = movie.Plot;
  const title = movie.Title;

  return (
    <ReviewPageContainer>
      <h1>{title}</h1>
      <ExtraMovieDetails
        categories={["Released", "Year", "Genre", "Director", "Runtime"]}
      />
      <PlotContainer>
        <h1>Plot</h1>
        <p>{plot}</p>
      </PlotContainer>
      <Reviews />
      <FormContainer>
        <UserForm />
      </FormContainer>
    </ReviewPageContainer>
  );
}

const ReviewPageContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom right, dimgray, black);

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
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  h3 {
    margin-bottom: 0.5rem;
  }

  & textarea {
    border-radius: 3px;
    box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.2);
  }

  & button {
    width: 50px;
  }
`;

export default MovieReviewPage;
