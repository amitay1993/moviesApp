import axios from "axios"

const apiClient = axios.create({
    baseURL: "http://localhost:3001",
});

export const createComment = async ()=>{
    const response = await apiClient.get();
    console.log(response)
}

export const fetchMovieDetails= async (movieId)=>{
    console.log(movieId)
    const response = await apiClient.get(`/${movieId}`);
    console.log(response)
}