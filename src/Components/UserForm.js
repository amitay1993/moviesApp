import React, { useState } from "react";

function UserForm(props) {
  const [review, setReview] = useState("");

  const reviewChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h3>Write a review</h3>
      <form>
        <textarea
          onChange={reviewChange}
          placeholder="Write your comment Here"
          rows={10}
          cols={100}
        />
      </form>
      <button>Submit</button>
    </div>
  );
}

export default UserForm;
