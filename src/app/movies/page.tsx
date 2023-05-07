import {useState} from "react";
import {searchMovies} from "@/services/movie-service";
import styles from "@/app/page.module.css";
import {Backdrop, CircularProgress} from "@mui/material";
import {Box} from "@mui/system";
import {MovieSearchInputButton} from "@/app/components/movie-search-input-button";
import MovieSearchResult from "@/app/components/movie-search-result";
import * as React from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searching, setSearching] = useState(false);

    async function onMovieSearch(title: string) {
        setSearching(true);
        searchMovies(title)
            .then(movies => {
                setMovies(movies);
            })
            .catch(error => {
                console.error('Error getting movies:', error);
            });
        setSearching(false);
    }

    return (
        <main className={styles.main}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={searching}
                onClick={() => setSearching(true)}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box style={{paddingBottom: 20}}>
                <MovieSearchInputButton onMovieSearch={(title => onMovieSearch(title))}/>
            </Box>
            <MovieSearchResult movies={movies}/>
        </main>
    )
}
