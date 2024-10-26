import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-300">{movie.originalTitle}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    originalTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;