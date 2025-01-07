import { ContentDetailViewType, TmdbContentType, TmdbTvType, TvDetailViewType } from "@/types";

function transformFromTvTypeToContentType(data: TmdbTvType): TmdbContentType {
    return {
        adult: data.adult,
        backdrop_path: data.backdrop_path,
        genre_ids: data.genre_ids,
        id: data.id,
        original_language: data.original_language,
        original_title: data.original_name || "",
        overview: data.overview,
        popularity: data.popularity,
        poster_path: data.poster_path,
        release_date: data.first_air_date || "",
        title: data.name || "",
        video: false,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
    };
}

function transformTvToContentDetail(tvDetail: TvDetailViewType): ContentDetailViewType {
    return {
        adult: tvDetail.adult,
        backdrop_path: tvDetail.backdrop_path ?? "",
        belongs_to_collection: "",
        budget: 0,
        genres: tvDetail.genres,
        homepage: tvDetail.homepage,
        id: tvDetail.id,
        imdb_id: "",
        original_language: tvDetail.original_language,
        original_title: tvDetail.original_name,
        overview: tvDetail.overview,
        popularity: tvDetail.popularity,
        poster_path: tvDetail.poster_path ?? "",
        production_companies: tvDetail.production_companies,
        production_countries: tvDetail.production_countries,
        release_date: tvDetail.first_air_date,
        revenue: 0,
        runtime: tvDetail.episode_run_time[0] ?? 0,
        spoken_languages: tvDetail.spoken_languages,
        status: tvDetail.status,
        tagline: tvDetail.tagline,
        title: tvDetail.name,
        video: false,
        vote_average: tvDetail.vote_average,
        vote_count: tvDetail.vote_count,
    };
}

export { transformFromTvTypeToContentType, transformTvToContentDetail };
