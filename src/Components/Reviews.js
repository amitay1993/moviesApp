import React from "react";
import ImageAvatars from "../Utils/Avatars";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

function Reviews({ reviews }) {
  return (
    <ReviewContainer>
      {reviews && <h3>Reviews</h3>}
      {reviews &&
        reviews.map((review) => {
          return (
            <TitleAndAvatarContainer>
              <ImageAvatars />
              <TextContainer>
                <p>{review}</p>
                <InnerRatingContainer>
                  <p>Rating</p>
                  <ReactStars
                      edit={false}
                      count={5}
                      size={20}
                      activeColor="#ffd700"
                  />
                </InnerRatingContainer>
              </TextContainer>
            </TitleAndAvatarContainer>
          );
        })}
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  h3 {
    margin-top: 5rem;
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const InnerRatingContainer = styled.div`
  
  align-items: center;
  display: flex;
  & p {
    
    margin-right: 1rem;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const TitleAndAvatarContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border: 1px solid white;
  width: 70%;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: whitesmoke;
`;

export default Reviews;
