import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

function UserForm({ movieId, onSubmit }) {
  const [comment, setComment] = useState("");

  const reviewChange = (event) => {
    const review = event.target.value;
    setComment(review);
  };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    return (
    <div>
      <h3>Write a review</h3>
      <textarea
        onChange={reviewChange}
        placeholder="Write your comment Here"
        rows={10}
        cols={100}
      />
      <RatingAndSubmitContainer>
        <SubmitButton onClick={() => onSubmit(movieId, comment)}>Submit</SubmitButton>
        <div>
          <span>Rating</span>
            <ReactStars
                isHalf={true}
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
        </div>
      </RatingAndSubmitContainer>
    </div>
  );
}

const RatingAndSubmitContainer = styled.div`
  display: flex;
  text-align: center;
  width: 814px;
  justify-content: space-between;
`;

const SubmitButton=styled.button`
  border-radius: 50%;
`

export default UserForm;
