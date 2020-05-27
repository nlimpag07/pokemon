import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
        
    render(){
        let title;
        let contBg;
        if(this.props.isWinner){
            title= <h1 className="Pokedex-winner">Winning Hand</h1>
            contBg= 'Pokedex-winnerBg';
        } else {
            title= <h1 className="Pokedex-loser">Losing Hand</h1>
            contBg= 'Pokedex-loserBg';
        }
        return(
        <div className={"Pokedex "+  contBg } >
            {title}
            <h4>Total Experience: {this.props.exp}</h4>
            <div className="Pokedex-cards">
            {this.props.pokemon.map((p) => (
                <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
        </div>
        );
    }
}

export default Pokedex;
