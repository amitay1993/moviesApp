
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import React from "react";
import SubmitForm from "./Components/SubmitForm";
import MoviesData from "./MoviesData";
import MoviesTable from "./Components/MoviesTable";
import ExtraMovieDetails from "./Components/ExtraMovieDetails";




const Movies=()=>{
    return <MoviesTable movies={MoviesData}/>
}

function App() {
  return (
      <Router>
        <Route exact path="/" component={Movies}/>
          <Route  path="/movieReview/:id"
               component={SubmitForm}/>
      </Router>



  );
}

export default App;
