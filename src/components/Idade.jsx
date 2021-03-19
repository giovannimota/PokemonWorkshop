import React from "react";

class Idade extends React.Component {
    render() {
        return(
            <p>Idade: {this.props.age} anos</p>
        );    
    }
}

export default Idade;