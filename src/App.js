import { BrowserRouter as Router, Route } from "react-router-dom";
import MoviesData from "./MoviesData";
import MoviesTable from "./Components/MoviesTable";
import MovieReviewPage from "./Components/MovieReviewPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" render={()=><MoviesTable movies={MoviesData}/>}/>
      <Route path="/movieReview/:id">
        <MovieReviewPage />
      </Route>
    </Router>
  );
}

export default App;
