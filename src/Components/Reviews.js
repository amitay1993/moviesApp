import React from "react";
import ImageAvatars from "../Utils/Avatars";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";

function Reviews(props) {
  return (
    <ReviewContainer>
      <h3>Reviews</h3>
      <TitleAndAvatarContainer>
        <ImageAvatars />
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
            aperiam aspernatur consequatur corporis deleniti esse harum illo
            inventore ipsam maxime mollitia nobis officia pariatur placeat,
            porro quasi quod, recusandae saepe suscipit ullam veritatis
            voluptas! Atque ex nemo repellat sequi! Ab accusantium architecto
            aut autem commodi consectetur cupiditate debitis dolore doloribus ea
            eius eos expedita facere fugiat harum ipsum, iure magnam minus modi
            nam natus necessitatibus nobis obcaecati perspiciatis praesentium
            quaerat quisquam quos ratione recusandae sed similique sint tenetur
            totam ullam ut vero voluptate. Accusamus adipisci cum inventore iste
            nihil omnis placeat quidem reprehenderit sequi sit! Delectus ex
            illum in.
          </p>
          <InnerRatingContainer>
            <p>Rating</p>
            <Rating
              name="size-small"
              // defaultValue={parseInt(movie.imdbRating) / 2}
              size="small"
            />
          </InnerRatingContainer>
        </TextContainer>
      </TitleAndAvatarContainer>
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
  display: flex;
  & p {
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
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: whitesmoke;
`;

export default Reviews;
