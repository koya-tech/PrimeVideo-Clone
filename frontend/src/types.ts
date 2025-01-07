type TmdbContentType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type TmdbTvType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
};

type MovieRowPropsType = {
    category: string;
    requestedUrl: string;
};

type Genre = {
    id: number;
    name: string;
};

type ProductionCompany = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

type Creator = {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
};

type Episode = {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
};

type Network = {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
};

type Season = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
};

type TvDetailViewType = {
    adult: boolean;
    backdrop_path: string | null;
    created_by: Creator[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Episode;
    name: string;
    next_episode_to_air: string | null;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
};

type ContentDetailViewType = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type MenuPropsType = {
    title: string;
    icon: string;
    blackicon: string;
    path: string;
};

export type {
    TmdbTvType,
    TmdbContentType,
    MovieRowPropsType,
    ContentDetailViewType,
    TvDetailViewType,
    MenuPropsType,
};
