import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

import fetchData from "@/lib/fetchData";
import { transformFromTvTypeToContentType } from "@/lib/transformData";
import { MovieRowPropsType, TmdbContentType, TmdbTvType } from "@/types";

function MainScreen({ requestedUrl }: MovieRowPropsType) {
    const [movies, setMovies] = useState<TmdbContentType[]>([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const type = location.pathname.slice(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchData(requestedUrl);
                if (location.pathname === "/tv") {
                    setMovies(
                        data.results.map((tv: TmdbTvType) => transformFromTvTypeToContentType(tv))
                    );
                } else {
                    setMovies(data.results);
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovies();
    }, [requestedUrl, location.pathname]);

    if (loading) return <Skeleton className="h-[250px] w-10/12 mx-auto my-4 rounded-xl" />;

    return (
        <div>
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent>
                    {movies
                        .filter((movie) => movie.backdrop_path)
                        .map((movie) => (
                            <CarouselItem key={movie.id} className="">
                                <Link to={`/${type}/${movie.id}`}>
                                    <div className="relative h-[300px] md:h-[600px]">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                            alt={movie.title}
                                            className="object-contain w-full md:max-h-none"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-gradient-to-r from-black to-transparent text-white p-8 w-1/2 h-full flex flex-col justify-end">
                                            <h2 className="text-5xl mt-1 mr-3 italic">
                                                {movie.title}
                                            </h2>
                                            <p className="text-2xl text-gray-300">
                                                {movie.release_date}
                                            </p>
                                        </div>
                                        <img
                                            src={`${import.meta.env.BASE_URL}/Amazon_Prime_Video_logo.svg`}
                                            alt="Logo"
                                            className="absolute bottom-4 right-4 w-30 h-10"
                                        />
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default MainScreen;
