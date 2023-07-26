import React from 'react';
import { directorsData } from '../data';

function Directors() {
  console.log('Rendering Directors Component');
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsData.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;

