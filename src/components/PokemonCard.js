import React from 'react';

const PokemonCard = (props) => {
  const { name, id } = props;
  const goToDetail = () => {
    props.history.push(`/pokemon/${id}`);
  }
  return (
    <div onClick={goToDetail} className="card">
      <p>{name}</p>
      {
        props.releasePokemon && (
          <b onClick={() => props.releasePokemon(id)} class="link">Release</b>
        )
      }
    </div>
  )
}

export default PokemonCard;