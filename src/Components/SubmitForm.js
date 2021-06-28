import MoviesData from "../MoviesData";
import React from "react";


import findIndex from  "lodash/findIndex"


const SubmitForm=({match})=> {
    const movieId = match.params.id;
    const movie = MoviesData[findIndex(MoviesData, function (o) {
        return o.imdbID === movieId;
    })];

    //imdbRating,plot,"Actors",
    const movieDetails = ["Title", "Runtime", "Genre", "Released"]
    return (
        <div>
            {movieDetails.map(key => {
                if (key === "Title") {
                    return <h1>{key} {movie[key]}<span>({movie["Year"]})</span></h1>
                }
                return <span> {movie[key]}</span>;
            })}
        </div>

    );
}
export default SubmitForm;
