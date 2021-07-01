import React from "react";
import ImageAvatars from "../Utils/Avatars";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

function Reviews({ reviews }) {

  console.log(reviews);
  return (
    <ReviewContainer>
      {reviews && <h3>Reviews</h3>}
      {reviews &&
        reviews.map((review,index) => {
          return (
            <TitleAndAvatarContainer key={index}>
              <ImageAvatars />
              <TextContainer>
                <p>{review.comment}</p>
                <InnerRatingContainer>
                  <p>Rating</p>
                  <ReactStars
                      value={review.rating}
                      edit={false}
                      count={5}
                      size={15}
                      activeColor="#ffd700"
                  />
                  <p>{review.rating}</p>
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
  margin-left: 1.5rem;

  h3 {
    margin-top: 5rem;
    margin-bottom: 0.5rem;
  }
`;

const InnerRatingContainer = styled.div`
  
  align-items: center;
  display: flex;
  & p {
    margin-right: 1rem;
    font-weight: bold;
    margin-left: 1rem;
  }
`;

const TitleAndAvatarContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border: 1px solid white;
  width: 70%;
  margin-bottom: 2.5rem;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: whitesmoke;
`;

export default Reviews;
