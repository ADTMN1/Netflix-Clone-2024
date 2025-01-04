import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from "../../../Utils/axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    console.log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get('v'));
                });
        }
    };

    const opts = {
        height: '390',
        width: "100%",
        playerVars: { autoplay: 1 },
    };

    const closeTrailer = () => {
        setTrailerUrl('');
    };

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map((movie, index) => {
                    const imageUrl = isLargeRow ? movie.poster_path : movie.backdrop_path;
                    return imageUrl ? (
                        <img
                            onClick={() => handleClick(movie)}
                            key={index}
                            src={`${base_url}${imageUrl}`}
                            alt={movie.name || movie.title}
                            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                        />
                    ) : null;
                })}
            </div>

            {trailerUrl && (
                <div className='trailer-container'>
                    <div className='close-button' onClick={closeTrailer}>
                        <span className='icon'>✖</span>
                    </div>
                    <YouTube videoId={trailerUrl} opts={opts} />
                </div>


            )}
        </div>
    );
};

export default Row;
