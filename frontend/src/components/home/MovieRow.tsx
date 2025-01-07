import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { Suspense, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";

import fetchData from "@/lib/fetchData";
import { transformFromTvTypeToContentType } from "@/lib/transformData";
import { MovieRowPropsType, TmdbContentType, TmdbTvType } from "@/types";

function MovieRow({ category, requestedUrl }: MovieRowPropsType) {
    const [state, setState] = useState<{ movies: TmdbContentType[]; loading: boolean }>({
        movies: [],
        loading: true,
    });
    const location = useLocation();
    const type = location.pathname.slice(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchData(requestedUrl);
                const movies =
                    type === "tv"
                        ? (data.results as TmdbTvType[]).map(transformFromTvTypeToContentType)
                        : data.results;
                setState({ movies, loading: false });
            } catch (err) {
                console.error(err);
                setState({ movies: [], loading: false });
            }
        };

        fetchMovies();
    }, [requestedUrl, type]);

    if (state.loading) return <Skeleton className="h-[125px] w-10/12 mx-auto my-4 rounded-xl" />;

    return (
        <>
            <h2 className=" m-4 font-bold text-2xl">{`${category}`}</h2>
            <Suspense fallback={<Skeleton className="h-[125px] w-full rounded-xl" />}>
                <ScrollArea className="w-full whitespace-nowrap rounded-md">
                    <div className="flex w-max space-x-4 p-4">
                        {state.movies
                            .filter((movie) => movie.backdrop_path)
                            .map((movie) => (
                                <div key={movie.id} className="relative">
                                    <HoverCard key={movie.id} openDelay={3} closeDelay={3}>
                                        <HoverCardTrigger asChild>
                                            <Link to={`/${type}/${movie.id}`}>
                                                <figure className="shrink-0">
                                                    <div className="group relative">
                                                        {" "}
                                                        <div className="relative z-0 group-hover:z-10">
                                                            {" "}
                                                            <img
                                                                loading="lazy"
                                                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                                                alt={`Photo by ${movie.title}`}
                                                                className="aspect-[3/2]
                                                                w-72 object-cover transition-transform duration-300 rounded-md group-hover:scale-125
                                                                group-hover:rounded-t-lg"
                                                                width={210}
                                                                height={140}
                                                            />
                                                        </div>
                                                        <img
                                                            src={`${import.meta.env.BASE_URL}/Amazon_Prime_Video_logo.svg`}
                                                            alt="Logo"
                                                            className="absolute bottom-2 right-2 w-20 h-10"
                                                        />
                                                    </div>
                                                </figure>
                                            </Link>
                                        </HoverCardTrigger>
                                        <HoverCardContent
                                            className="absolute -left-44 top-5 text-white rounded-md z-50 w-[360px] "
                                            sideOffset={0}
                                        >
                                            <div className="flex flex-col gap-2 bg-white dark:bg-pvBlack w-full rounded-b-lg p-4">
                                                <h3 className="font-bold">{movie.title}</h3>
                                                <div className="flex flex-col text-sm text-white">
                                                    <div className="flex items-center">
                                                        <span>
                                                            Release Date : {movie.release_date}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span>
                                                            Language :{" "}
                                                            {movie.original_language.toUpperCase()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                                                        ★ {(movie?.vote_average || 0) / 2}
                                                    </div>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                            ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </Suspense>
        </>
    );
}

export default MovieRow;
