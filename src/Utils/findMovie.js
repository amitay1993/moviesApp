import MoviesData from "../MoviesData";
import findIndex from "lodash/findIndex";

export const findMovie = (movieId) => {
  const movie =
    MoviesData[
      findIndex(MoviesData, function (o) {
        return o.imdbID === movieId;
      })
    ];
  return movie;
};
