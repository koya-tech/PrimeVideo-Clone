import { Link } from "react-router-dom";

import Header from "../common/Header";

function About() {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto p-6 space-y-8">
                <h1 className="text-4xl font-bold text-center text-pvPetrel">About</h1>
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-pvPetrel">What is PrimeClone?</h2>
                    <p className="dark:text-gray-400">
                        Welcome to <span className="font-bold">PrimeClone</span>, your gateway to
                        endless entertainment! 🎥🍿
                        <br />
                        PrimeClone is a dynamic movie streaming website where you can explore
                        trending movies, top-rated films, and much more. Built with a passion for
                        great user experience, this platform showcases the power of modern web
                        development.
                    </p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-pvPetrel">Developer</h2>
                    <p className="dark:text-gray-400">
                        This project was designed and developed by{" "}
                        <Link to={"https://www.linkedin.com/in/koya-hiura-9aa75b31a/"}>
                            <span className="font-bold">Koya</span>
                        </Link>
                        , a passionate web developer focused on crafting efficient and visually
                        appealing web applications.
                    </p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-pvPetrel">Technologies Used</h2>
                    <ul className="list-disc pl-6 dark:text-gray-400">
                        <li>
                            <span className="font-bold">React</span>: The foundation of our user
                            interface, providing a dynamic and responsive experience.
                        </li>
                        <li>
                            <span className="font-bold">Vite</span>: Ensures fast builds and optimal
                            performance during development.
                        </li>
                        <li>
                            <span className="font-bold">Tailwind CSS</span>: For sleek, modern, and
                            highly customizable styling.
                        </li>
                        <li>
                            <span className="font-bold">shadcn UI</span>: Enhances the user
                            experience with reusable, stylish components.
                        </li>
                        <li>
                            <span className="font-bold">TMDB API</span>: Powers our vast library of
                            movie data, ensuring real-time access to the latest entertainment
                            content.
                        </li>
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-pvPetrel">Disclaimer</h2>
                    <p className="dark:text-gray-400">
                        PrimeClone is a personal project built for educational purposes and is not
                        affiliated with Amazon Prime Video or The Movie Database (TMDB).
                    </p>
                </section>
                <footer className="text-center text-gray-500">
                    <p>
                        Thank you for visiting PrimeClone! Explore, enjoy, and experience the world
                        of movies like never before.
                    </p>
                </footer>
            </div>
        </>
    );
}

export default About;
