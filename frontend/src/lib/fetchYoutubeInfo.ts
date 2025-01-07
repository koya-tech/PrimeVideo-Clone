import axios from "axios";

const fetchYoutubeInfo = async (requestUrl: string, keyword: string) => {
    try {
        const response = await axios.get(requestUrl, {
            params: {
                key: `${import.meta.env.VITE_YOUTUBE_API_KEY}`,
                type: "video",
                maxResults: 1,
                q: keyword,
                order: "relevance",
                rel: 0,
                modestbranding: 1,
            },
            headers: {
                accept: "application/json",
            },
        });

        return response.data;
    } catch (err) {
        // setError(err);
        // setLoading(false);
        console.error(err);
    }
};

export default fetchYoutubeInfo;
