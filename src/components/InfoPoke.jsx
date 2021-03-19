import React from "react";
import "../styles/info.css";

class InfoPoke extends React.Component {
    render() {
        return(
            <div className="InfoContent">
                <h1>Nome: {this.props.data.name}</h1>
                <div className="imageContent">
                    <img src={this.props.data.sprites.front_default} />
                </div>
            </div>
        );    
    }
}

export default InfoPoke;