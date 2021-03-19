import React, { Component } from "react";
import Nome from "../components/Nome";
import Idade from "../components/Idade";
import "../styles/main.css";
import Button from '@material-ui/core/Button';

class Main extends React.Component {
    render(){
        return(
            <div className="Content">
                <Nome name="Giovanni" />
                <Idade age="20" />
                <Nome name="Robertinho" />
                <Idade age="100" />
                <Nome name="Giovanni" />
                <Idade age="20" />
            </div>
        );
    }
}

export default Main;