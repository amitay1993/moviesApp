import React, {useEffect, useRef, useState} from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

function UserForm({movieId, onSubmit}) {
    const [comment, setComment] = useState("");
    const [rating,setRating]=useState(0);
    const [selectedRating,setSelectedRating]=useState(0);
    const [error, setError] = useState("");



    const reviewChange = (event) => {
        const review = event.target.value;
        setComment(review);
    };

    const ratingChanged = (newRating) => {
        setSelectedRating(newRating);
    };

    const handleRating=(event)=>{
        setRating(parseInt(event.target.dataset.index)+1);
    }

    const handleLeave=()=>{
        setRating(0);
    }

    const submit=()=>{
        if (comment.trim().length < 1) {
            setError("You must write a comment in order to sumbit")
        }
        else if(selectedRating===0) {
            setError("You muse include rating");
        }
        else {
            onSubmit(movieId, comment,selectedRating)
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
                <SubmitButton onClick={submit}><span>Submit </span></SubmitButton>
                <h3>{error}</h3>
                <div>
                    <span>Rating</span>
                    <span onMouseMove={handleRating} onMouseLeave={handleLeave}>
                                   <ReactStars
                                       value={selectedRating}
                                       count={5}
                                       onChange={ratingChanged}
                                       size={24}
                                       activeColor="#ffd700"
                                   />
                    </span>
                <span>{rating||selectedRating}</span>
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
  border-radius: 4px;
  background-image: linear-gradient(to bottom right, #9d9d9d, #7c8aa4);
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 0.5rem;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;

  }

  span:after {
  
    content: '✔️';
    position: absolute;
    opacity: 0;
    right: -30px;
    transition: 0.5s;
  }

  :hover span {
    padding-right: 40px;

  }

  :hover span:after {
    opacity: 1;
    right: 0;
  }

`



export default UserForm;
