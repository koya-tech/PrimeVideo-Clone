const fetchMovieListObject = {
    topRated: {
        category: "Top Rated",
        url: "https://api.themoviedb.org/3/movie/top_rated",
    },
    popular: {
        category: "Popular",
        url: "https://api.themoviedb.org/3/movie/popular",
    },
    upcoming: {
        category: "Upcoming",
        url: "https://api.themoviedb.org/3/movie/upcoming",
    },
    nowPlaying: {
        category: "Now Playing",
        url: "https://api.themoviedb.org/3/movie/now_playing",
    },
};

const fetchTvseriesListObject = {
    topRated: {
        category: "Top Rated",
        url: "https://api.themoviedb.org/3/tv/top_rated",
    },
    popular: {
        category: "Popular",
        url: "https://api.themoviedb.org/3/tv/popular",
    },
    onTheAir: {
        category: "On The Air",
        url: "https://api.themoviedb.org/3/tv/on_the_air",
    },
    airingToday: {
        category: "Airing Today",
        url: "https://api.themoviedb.org/3/tv/airing_today",
    },
};

export { fetchMovieListObject, fetchTvseriesListObject };
