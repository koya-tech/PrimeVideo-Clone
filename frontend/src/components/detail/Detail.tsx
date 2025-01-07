import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import YouTube from "react-youtube";

import { Button } from "../ui/button";

import useDarkMode from "@/hooks/useDarkMode";
import fetchMovieDetail from "@/lib/fetchMovieDetail";
import fetchYoutubeInfo from "@/lib/fetchYoutubeInfo";
import { transformTvToContentDetail } from "@/lib/transformData";
import { ContentDetailViewType } from "@/types";

function Detail() {
    const [movieDetail, setMovieDetail] = useState<ContentDetailViewType>();
    const [isExpanded, setIsExpanded] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);
    const [videoId, setVideoId] = useState("");
    const { darkMode } = useDarkMode();

    const handlePlayMovie = () => {
        setShowPlayer(!showPlayer);
    };
    const { id } = useParams();
    const location = useLocation();

    const renderPlayButtonIcon = () =>
        `${import.meta.env.BASE_URL}${darkMode ? "/playvideo_black.svg" : "/playvideo.svg"}`;

    const renderStopButtonIcon = () =>
        `${import.meta.env.BASE_URL}${darkMode ? "/stop_black.svg" : "/stop.svg"}`;

    useEffect(() => {
        const getMovieDetail = async () => {
            try {
                const data = await fetchMovieDetail(
                    `https://api.themoviedb.org/3/${location.pathname}`
                );
                console.log("data", data);
                setMovieDetail(
                    location.pathname.includes("tv") ? transformTvToContentDetail(data) : data
                );
            } catch (error) {
                console.error(error);
            }
        };
        getMovieDetail();
    }, [id, location.pathname]);

    useEffect(() => {
        const getYoutubeInfo = async () => {
            try {
                const data = await fetchYoutubeInfo(
                    "https://www.googleapis.com/youtube/v3/search",
                    movieDetail?.original_title || ""
                );
                setVideoId(data.items[0].id.videoId);
            } catch (error) {
                console.error(error);
            }
        };

        if (showPlayer) {
            getYoutubeInfo();
        }
    }, [showPlayer, movieDetail?.original_title]);

    return (
        <>
            {showPlayer ? (
                <YouTube
                    videoId={videoId}
                    opts={{
                        width: "100%",
                        playerVars: {
                            autoplay: 1,
                        },
                    }}
                    className="w-full"
                />
            ) : (
                <div className="relative">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
                        alt={`Photo by ${movieDetail?.title}`}
                        className="object-cover w-full"
                        width={210}
                        height={140}
                    />
                    <h1 className="absolute mx-8 mt-8 mb-4 text-8xl font-semibold bottom-4">
                        {movieDetail?.original_title}
                    </h1>
                </div>
            )}

            <div className="flex flex-col">
                <Button className="mx-8 mt-4 mb-1" onClick={handlePlayMovie}>
                    <div className="flex items-center">
                        <img
                            src={showPlayer ? renderStopButtonIcon() : renderPlayButtonIcon()}
                            alt="Control Icon"
                            className="max-w-4 mx-2"
                        />
                        <p>{showPlayer ? "Stop Movie" : "Play Movie"}</p>
                    </div>
                </Button>
                <Button className="mx-8 mb-2 mt-1 bg-pvGrey text-white">
                    <Link to={movieDetail?.homepage || ""}>
                        <div className="flex items-center">
                            <img
                                src={`${import.meta.env.BASE_URL}/external-link.svg`}
                                alt=""
                                className="max-w-4 mx-2"
                            />
                            <p>Home Page</p>
                        </div>
                    </Link>
                </Button>
            </div>
            <p
                className={`text-2xl m-8 line-clamp-3
                    ${isExpanded ? "!line-clamp-none cursor-auto" : "cursor-pointer"}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {movieDetail?.overview}
            </p>
            <div className="mx-8 my-4">
                <div className="flex">
                    {movieDetail?.genres.map((genre) => (
                        <p key={genre.id} className="text-2xl mr-2 font-semibold">
                            {genre.name},
                        </p>
                    ))}
                </div>
            </div>
            <div className="mx-8 flex items-end">
                <StarRatings
                    rating={(movieDetail?.vote_average || 0) / 2}
                    starRatedColor="rgb(109, 122, 130)"
                    starEmptyColor={darkMode ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="1px"
                />
                <p className="mx-2 text-xl">{(movieDetail?.vote_average || 0) / 2}</p>
            </div>
            {(movieDetail?.production_companies.length || 0) > 0 && (
                <div className="mx-8 my-4">
                    <h2 className="font-semibold text-2xl">Production Companies</h2>
                    {movieDetail?.production_companies.map((company) => (
                        <li
                            key={company.id}
                            className="
                        text-xl"
                        >
                            {company.name}
                        </li>
                    ))}
                </div>
            )}
        </>
    );
}

export default Detail;
