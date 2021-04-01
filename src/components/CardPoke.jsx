import React from "react";

class CardPoke extends React.Component {
    render() {
        return(
            <div>
                <h1>Nome: {this.props.data.name}</h1>
                <h6>Order: {this.props.data.order}</h6>
                <div>
                    <img src={this.props.data.image} />
                </div>
            </div>
        );    
    }
}

export default CardPoke;