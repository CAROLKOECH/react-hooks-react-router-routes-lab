import React from 'react';
import { moviesData } from '../data';

function Movies() {
  console.log('Rendering Movies Component');
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesData.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;

