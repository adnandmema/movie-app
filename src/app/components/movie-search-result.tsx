import {Movie} from "@/services/movie-service";
import {Alert, ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {useRouter} from "next/navigation";

interface MovieSearchResultProps {
    movies: Movie[];
}

export default function MovieSearchResult(props: MovieSearchResultProps) {
    const { movies } = props;
    const router = useRouter();

    if (movies === null) {
        return <Alert severity="error">No results found!</Alert>
    }

    function movieClicked(imdbID: string) {
        router.push(`/movies/${imdbID}`)
        console.log(imdbID)
    }

    return (
        <ImageList cols={movies.length} sx={{ width: 700, height: 450 }}>
            {movies.map((item) => (
                <ImageListItem key={item.imdbID}>
                    <img
                        src={`${item.Poster}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.Poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.Title}
                        loading="lazy"
                        onClick={(id) => movieClicked(item.imdbID)}
                    />
                    <ImageListItemBar
                        title={item.Title}
                        subtitle={<span>{item.Year}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
