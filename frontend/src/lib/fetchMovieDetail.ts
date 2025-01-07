import axios from "axios";

const fetchMovieDetail = async (requestUrl: string) => {
    try {
        const response = await axios.get(requestUrl, {
            params: {
                language: "en-US",
            },
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
            },
        });

        return response.data;
    } catch (err) {
        // setError(err);
        // setLoading(false);
        console.error(err);
    }
};

export default fetchMovieDetail;
