import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQyYzAwNTJjMDdjMjRkMTFmZmQ1MDMwY2NmYzY2MiIsInN1YiI6IjY1YWE4NWZhYjBjZDIwMDEzMzE3ZTVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L4td8iBSuA5_JK5hjhhNaVdEtlEY-teA3mk9M65fN6g"
    }
});

export default movieDB;