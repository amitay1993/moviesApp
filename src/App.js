import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import MoviesData from "./MoviesData";
import MoviesTable from "./Components/MoviesTable";
import ExtraMovieDetails from "./Components/ExtraMovieDetails";
import { useParams } from "react-router";
import MovieReviewPage from "./Components/MovieReviewPage";

const Movies = () => {
  return <MoviesTable movies={MoviesData} />;
};

// const Test = () => {
//   const params = useParams();
//
//   return <div>{JSON.stringify(params)}</div>;
// };

function App() {
  return (
    <Router>
      <Route exact path="/" component={Movies} />
      <Route path="/movieReview/:id">
        <MovieReviewPage />
      </Route>
    </Router>
  );
}

export default App;
