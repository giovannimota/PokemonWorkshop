import React, { Component } from "react";
import api from "../services/api";
import "../styles/pokemain.css";
import InfoPoke from "../components/InfoPoke";
import axios from "axios";

import {CircularProgress , Snackbar} from '@material-ui/core';
import Alert from "../components/Alert";

class PokeMain extends Component {
  state = {
    loading: false,
    pokeError: false,
    search: false,
    pokemon: [],
    name: '',
    image: '',
    order: '',
    stats: [],
    save: false,
    emptyFieldWarning: false,
  }

  handleSearchPokemon = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      pokeError: false,
      search: false,
    });

    if ((this.state.pokeNameInput === '') || (this.state.pokeNameInput === undefined)) {
      this.setState({
        emptyFieldWarning: true,
      });
    }

    try {
      const pokemonApi = await api.get(`${this.state.pokeNameInput}`);

      this.setState({
        pokemon: pokemonApi.data,
        search: true,
        name: pokemonApi.data.name,
        image: pokemonApi.data.sprites.other.dream_world.front_default,
        order: pokemonApi.data.order,
        stats: pokemonApi.data.stats,
      });

    }
    catch (err) {
      this.setState({
        pokeError: true,
      });
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleButtonSave = (e) => {
    this.handleSaveData(e, this.state.name, this.state.image, this.state.order, this.state.stats);
  }

  handleSaveData = (e, name, image, order, stats) => {
    e.preventDefault();
    axios.post('http://localhost:7071/api/poke/post', {
      "name": name,
      "image": image,
      "order": order,
      "stats": stats
    });
    this.setState({
      save: true,
    });
  }

  handleClose = () => {
    this.setState({
      save: false,
      pokeError: false,
      emptyFieldWarning: false,
    });
  };

  render() {
    return (
      <div className="Content">
        <h1>Pokémon</h1>
        {this.state.loading && <CircularProgress />}
        <form className="Form" onSubmit={this.handleSearchPokemon}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nome do Pokémon</span>
            <input
              type="text"
              class="form-control"
              placeholder="Digite aqui"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={this.state.pokeNameInput}
              onChange={({ target }) => this.setState({ pokeNameInput: target.value })}
            />
            <button type="button" class="btn btn-secondary">
              Search
          </button>
          </div>

        </form>
        {this.state.search &&
          <div className="CardMain">
            <InfoPoke data={this.state.pokemon} />
            <button type="button" class="btn btn-success" onClick={(e) => { this.handleButtonSave(e) }} >Salvar</button>
          </div>}

        <Snackbar open={this.state.save} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="success">
            Salvo!
          </Alert>
        </Snackbar>
        <Snackbar open={this.state.pokeError} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="error">
            Deu ruim! Tururu...
          </Alert>
        </Snackbar>
        <Snackbar open={this.state.emptyFieldWarning} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="warning">
            O campo está em branco.
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default PokeMain;