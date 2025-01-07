// import Header from "../common/Header";

import MainScreen from "./MainScreen";
import MovieLargerRow from "./MovieLargerRow";
import MovieRow from "./MovieRow";

import { fetchMovieListObject } from "@/lib/fetchList";

function MoviePage() {
    const fetchList = fetchMovieListObject;
    return (
        <>
            <MainScreen
                category={fetchList.nowPlaying.category}
                requestedUrl={fetchList.nowPlaying.url}
            />

            <MovieRow
                category={fetchList.topRated.category}
                requestedUrl={fetchList.topRated.url}
            />

            <MovieRow category={fetchList.popular.category} requestedUrl={fetchList.popular.url} />
            <MovieRow
                category={fetchList.upcoming.category}
                requestedUrl={fetchList.upcoming.url}
            />
            <MovieLargerRow
                category={fetchList.nowPlaying.category}
                requestedUrl={fetchList.nowPlaying.url}
            />
        </>
    );
}

export default MoviePage;
