import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPokemon, releasePokemon } from '../modules/owned/actions';
import  Description from '../components/Description';
export class Detail extends Component {
  constructor() {
    super();
    this.state = { 
      pokemon: {},
      caught: false,
      tried: false,
      name: '',
    };
  }

  goToOwned() {
    this.props.history.push('/owned');
  }

  goToPokemon() {
    this.props.history.push('/');
  }

  getThisPokemon() {
    const chance = 0.5;
    const caught = !!chance && Math.random() <= chance;
    this.setState({ tried: true, caught });
  }
  
  addPokemon() {
    if (this.state.name === '') return;
    this.props.addPokemon({...this.state.pokemon, nickname: this.state.name});
    this.goToOwned()
    return;
  }

  hasOwned() {
    return this.props.owned.findIndex((e) => e.id === parseInt(this.props.match.params.id, 10));
  }

  renderExist() {
    const owned = this.hasOwned();
    if (owned < 0) return <button className="button-get-pokemons" onClick={() => this.getThisPokemon()}>Get this pokemon</button>;
    return <p>
      You already own this pokemon
      <b className="link" onClick={() => this.goToPokemon()}> Find another pokemons</b> or 
      <b className="link" onClick={() => this.props.releasePokemon(this.props.match.params.id)}> Release pokemon</b>
    </p>
  }

  renderMessage() {
    if (!this.state.caught) return (
      <p>Ops, your not lucky this time, <b className="link" onClick={() => this.goToPokemon()}>Find again!</b></p>
    );
    return;
  }

  renderAction() {
    if (this.state.caught) {
      return <>
        <p>Congratulation! give your pokemon nickname</p>
        <input onChange={(e) => this.setState({ name: e.target.value })} placeholder="Nickname" />
        <button onClick={() => this.addPokemon()}>Save</button>
      </>;
    }
    return (
      this.state.tried
        ? this.renderMessage()
        : this.renderExist()
    )
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ pokemon: json });
      })
  }

  render () {
    if (!Object.keys(this.state.pokemon).length) return <p>please wait..</p>;
    return (
      <div>
        <h1>
          {this.hasOwned() > -1 ? `${this.props.owned[this.hasOwned()].nickname} - ` : ''}
          {this.state.pokemon.name}
        </h1>
        <img className="large" alt={this.state.pokemon.name} src={this.state.pokemon.sprites.front_default} />
        <Description pokemon={this.state.pokemon} />
        <footer>
          {this.renderAction()}
        </footer>
      </div>
    );
  }
}

export default connect(({ owned }) => ({ owned }), { addPokemon, releasePokemon })(Detail);