import React from 'react';

const Description = (props) => {
  return <>
    <div>
      <h2>Specification</h2>
      <h3>Moves</h3>
      <section>
      {
        props.pokemon.moves.length && props.pokemon.moves.map(e => (
          <label key={JSON.stringify(e)}>{e.move.name}</label>
        ))
      }
      </section>
      <h3>Type</h3>
      <section>
      {
        props.pokemon.types.length && props.pokemon.types.map(e => (
          <label key={JSON.stringify(e)}>{e.type.name}</label>
        ))
      }
      </section>
      <h3>Others</h3>
      <p><b>Height</b>: <span>{props.pokemon.height}</span></p>
      <p><b>Weight</b>: <span>{props.pokemon.weight}</span></p>
      <p><b>Base Experience</b>: <span>{props.pokemon.base_experience}</span></p>
    </div>
  </>;
};

export default Description;
