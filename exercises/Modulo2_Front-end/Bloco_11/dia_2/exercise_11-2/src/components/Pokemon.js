import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
render() {
  const { pokemon } = this.props;
  return (
    <div className='pokemon'>
      <div>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.type}</h2>
      <h3>Peso medio: {pokemon.averageWeight.value + pokemon.averageWeight.measurementUnit}</h3>
      </div>
      <img className='img' src={pokemon.image}></img>
    </div>
  );
}
}

Pokemon.propTypes = {
  pokemon : PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }.isRequired),
    image: PropTypes.string.isRequired,
  })
};
export default Pokemon;