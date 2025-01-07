import axios from "axios";

const fetchData = async (requestUrl: string) => {
    try {
        const response = await axios.get(requestUrl, {
            params: {
                language: "en-US",
                page: 1,
            },
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
            },
        });

        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export default fetchData;
