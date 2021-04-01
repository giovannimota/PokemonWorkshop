import axios from 'axios';
import React from 'react';
import CardPoke from '../components/CardPoke';
import "../styles/pokeconsultas.css";

class PokeConsultas extends React.Component {
    state = {
        pokeData: [],
    }

    componentDidMount() {
        axios.get('http://localhost:7071/api/poke/get').then((res) =>
            this.setState({
                pokeData: res.data,
                id: 0,
            })
        );
    }

    render() {
        return (
            <div>
                {this.state.pokeData.map(poke => 
                    <CardPoke data={poke}   /> 
                )}
            </div>
        );
    }
}

export default PokeConsultas;