import {Alert} from "@mui/material";

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface MovieDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

const API_KEY = `5e3b8f54`;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function searchMovies(title: string) {
    const res = await fetch(`${API_URL}&s=${title}`);
    const json = await res.json();
    if (json.Error === 'Movie not found!')
        return null;

    const movies = json.Search;
    return movies.slice(0, 3) as Movie[];
}

export async function getMovieDetails(id: string) {
    const res = await fetch(`${API_URL}&i=${id}`);
    const json = await res.json();
    if (json.Error === 'Movie not found!')
        throw Error("Invalid movie ID!");

    return json as MovieDetails;
}
