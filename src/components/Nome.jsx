import React from "react";

class Nome extends React.Component {
    render() {
        return(
            <p>Nome: {this.props.name} </p>
        );    
    }
}

export default Nome;