import React from 'react';
import { actorsData } from '../data';

function Actors() {
  console.log('Rendering Actors Component');
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsData.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
