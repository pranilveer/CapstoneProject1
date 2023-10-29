import { useEffect, useState } from "react";
import styles from "./List.module.css";
const List = ({ genre }) => {
    const [movies, setMovies] = useState([]);
    console.log(movies);
    // useEffect(() => {
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
    //             "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    //         },
    //     };
    //     const fetchMovies = async () => {
    //         await fetch(
    //             `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
    //             options
    //         )
    //             .then((response) => response.json())
    //             .then((response) => setMovies(response.results.splice(4, 4)))
    //             .catch((err) => console.error(err));
    //     };
    //     fetchMovies();
    // }, []);
    return (
        <>
            <p className={styles.heading} style={{ overflowY: "hidden" }}>
                {genre}
            </p>
            <div className={styles.box}>
                {movies.map((movie, idx) => {
                    return (
                        <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
                            <img src={movie?.primaryImage?.url} className={styles.img}/>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default List;