'use client'

import {getMovieDetails, MovieDetails} from "@/services/movie-service";
import { Paper, Typography } from '@mui/material';

export default async function MovieDetails({params}) {
    const movie = await getMovieDetails(params.id);

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "30%", marginRight: "20px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>{movie.Title}</h2>
                <p>
                    <strong>Year:</strong> {movie.Year}
                </p>
                <p>
                    <strong>Genre:</strong> {movie.Genre}
                </p>
                <p>
                    <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                    <strong>Actors:</strong> {movie.Actors}
                </p>
                <p>
                    <strong>Plot:</strong> {movie.Plot}
                </p>
            </div>
        </div>
    );
}
