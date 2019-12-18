import React from 'react';

const PokemonCard = (props) => {
  const { name, id } = props;
  const goToDetail = () => {
    props.history.push(`/pokemon/${id}`);
  }
  return (
    <div onClick={goToDetail} className="card">
      <p>{name}</p>
    </div>
  )
}

export default PokemonCard;