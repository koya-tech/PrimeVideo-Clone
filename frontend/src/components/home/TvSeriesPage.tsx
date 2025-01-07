import MainScreen from "./MainScreen";
import MovieLargerRow from "./MovieLargerRow";
import MovieRow from "./MovieRow";

import { fetchTvseriesListObject } from "@/lib/fetchList";

function TvSeriesPage() {
    const fetchList = fetchTvseriesListObject;
    return (
        <>
            <MainScreen
                category={fetchList.popular.category}
                requestedUrl={fetchList.popular.url}
            />

            <MovieRow
                category={fetchList.topRated.category}
                requestedUrl={fetchList.topRated.url}
            />

            <MovieRow
                category={fetchList.onTheAir.category}
                requestedUrl={fetchList.onTheAir.url}
            />
            <MovieRow
                category={fetchList.airingToday.category}
                requestedUrl={fetchList.airingToday.url}
            />
            <MovieLargerRow
                category={fetchList.popular.category}
                requestedUrl={fetchList.popular.url}
            />
        </>
    );
}

export default TvSeriesPage;
