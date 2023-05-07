import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {FC, useState} from "react";

interface SearchMovieProps {
    onMovieSearch: (title: string) => void;
}
export const MovieSearchInputButton: FC<SearchMovieProps> = ({
    onMovieSearch
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch() {
        onMovieSearch(searchQuery)
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search movie"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(event.target.value);
                }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
