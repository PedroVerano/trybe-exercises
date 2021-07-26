import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
render() {
  const { pokemons } = this.props
  return (
    <section className='pokedex'>
      {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </section>
  );
}
}
Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }.isRequired),
    image: PropTypes.string.isRequired,
  }).isRequired)
}
export default Pokedex;
