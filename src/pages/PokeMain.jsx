import React, { Component } from "react";
import api from "../services/api";
import "../styles/pokemain.css";
import InfoPoke from "../components/InfoPoke";
import { Button, TextField  } from "@material-ui/core";

class PokeMain extends React.Component {
    state = {
        loading: false,
        pokeError: false,
        search: false,
        pokemon: [],
    }

    handleSearchPokemon = async(e) => {
        e.preventDefault();
        this.setState({ loading: true });
        
        try {
            const pokemonApi = await api.get(`${this.state.pokeNameInput}`);

            this.setState({
                pokemon: pokemonApi.data,
            });
            
            this.setState({
                search: true,
            });

            console.log(pokemonApi.data);

        } 
        catch (err) {
            this.setState({ pokeError: true });
        } 
        finally {
            this.setState({ loading: false });
        }
    }

    render(){
        return(
            <div className="Content">
                <h1>Pokémon</h1>
                <form className="Form" onSubmit={this.handleSearchPokemon}>
                    <TextField 
                        id="outlined-basic" 
                        label="Nome do pokemon" 
                        variant="outlined" 
                        value={this.state.pokeNameInput} 
                        onChange={e => this.setState({ pokeNameInput: e.target.value })}
                    />
                    <Button type="submit" variant="contained" color="secondary">
                        Search
                    </Button>
                </form>
                {this.state.search ? <InfoPoke data={this.state.pokemon} /> : null}
            </div>
        );
    }
}

export default PokeMain;