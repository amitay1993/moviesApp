import React, {useEffect, useRef, useState} from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

function UserForm({movieId, onSubmit}) {
    const [comment, setComment] = useState("");
    const [rating,setRating]=useState(0);
    const [error, setError] = useState("");



    const reviewChange = (event) => {
        const review = event.target.value;
        setComment(review);
    };


    const ratingChanged = (newRating) => {
        setRating(newRating);

    };

    const submit=()=>{
        if (comment.trim().length < 1) {
            setError("You must write a comment in order to sumbit")
        }
        else if(rating===0) {
            setError("You muse include rating");
        }
        else {
            onSubmit(movieId, comment,rating)
            setComment("");
        }

    }


    return (
        <div>
            <h3>Write a review</h3>
            <textarea
                value={comment}
                onChange={reviewChange}
                placeholder="Write your comment Here"
                rows={10}
                cols={100}
            />
            <RatingAndSubmitContainer>
                <SubmitButton onClick={submit}>Submit</SubmitButton>
                <h3>{error}</h3>
                <div>
                    <span>Rating</span>
                    <ReactStars
                        value={rating}
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
  margin-bottom: 3.5rem;
  
  
  & h3{
    color: red;
  }
`;

const SubmitButton = styled.button`
  border-radius: 50%;
`

export default UserForm;
