/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TMDB_API_READ_ACCESS_TOKEN: string;
    // Add other environment variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
