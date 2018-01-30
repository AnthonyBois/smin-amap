import React from 'react';

class Veggie extends React.Component{
    render(){
        const { details } = this.props;
        var ajoutPanier = []
      	if (this.props.details.status === "available"){
      		ajoutPanier.push(
      			<button >Ajouter au caddie</button>
      		)
      	} else {
      		ajoutPanier.push(
      			<button disabled>Pas en stock...</button>
      		)
      	}
         return (
        <li className="menu-veggie">
            <img src={details.image} alt={details.name} />
            <h3 className="veggie-name"> 
                {details.name}
                <span className="price">{details.price} €</span>
            </h3>
            <p>{details.desc}</p>
            {ajoutPanier}
        </li>
    )
    }
   
}

export default Veggie;

