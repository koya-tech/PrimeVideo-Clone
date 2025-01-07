import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./components/about/About";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Detail from "./components/detail/Detail";
import MoviePage from "./components/home/MoviePage";
import TvSeriesPage from "./components/home/TvSeriesPage";
import DarkModeProvider from "./providers/DarkProvider";

function App() {
    return (
        <>
            <DarkModeProvider>
                <div className="fixed top-0 w-full z-50">
                    <Header />
                </div>
                <div className="pb-40">
                    <Routes>
                        <Route path="/movie" element={<MoviePage />} />
                        <Route path="/movie/:id" element={<Detail />} />
                        <Route path="/tv" element={<TvSeriesPage />} />
                        <Route path="/tv/:id" element={<Detail />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
                <Footer />
            </DarkModeProvider>
        </>
    );
}

export default App;
