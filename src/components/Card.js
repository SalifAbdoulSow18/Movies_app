import React from 'react';

const Card = ({ movie }) => {
    return (
        <div className="card">
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"} alt="afficher film"/>
            <h2>{movie.title}</h2>
        </div>
    );
};

export default Card;
