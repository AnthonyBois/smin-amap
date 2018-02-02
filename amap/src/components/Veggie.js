import React from 'react';
import { formatPrice } from '../helpers.js';

class Veggie extends React.Component {

    createOrder() {
        const order = {
          name: this.props.details.name,
          image: this.props.details.image,
          price: this.props.details.price,
          nombreProduitDispo: this.props.details.nombreProduitDispo,
          nombreProduits: 1,
          prixFinal: this.props.details.price,
        }
        this.props.addOrder(order);
    }


  render() {
    const { details } = this.props;
  	var ajoutPanier = []
  	if (this.props.details.status === "available"){
  		ajoutPanier.push(
  			<button onClick={() => this.createOrder()} key={ajoutPanier + this.props.details.name}>Ajouter au caddie</button>
  			)
  		var quantite = <p className="total">Stock: {this.props.details.nombreProduitDispo} kg</p>
  	} 
  	else {
  		ajoutPanier.push(
  			<button onClick={() => this.createOrder()} key={ajoutPanier + this.props.details.name} disabled>Indisponible</button>
  		)
  	}
  	
    return (
      <li className="menu-veggie">
        <img src={details.image} alt={details.name} />
        <h3 className="veggie-name"> 
            {details.name}
            <span className="price">{formatPrice(details.price)}/kg</span>
        </h3>
        <p>{details.desc}</p>
        {quantite}
      	{ajoutPanier}
      </li>
      
    )
  }
}


export default Veggie;

