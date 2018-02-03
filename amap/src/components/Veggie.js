import React from 'react';
import { formatPrice } from '../helpers.js';
import { Button, Card, CardBody} from 'reactstrap';

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
  		  <Button color="info" onClick={() => this.createOrder()} key={ajoutPanier + this.props.details.name}>Ajouter au caddie</Button>
  			)
  		var quantite = <p className="total">Stock: {this.props.details.nombreProduitDispo} kg</p>
  	} 
  	else {
  		ajoutPanier.push(
  			<button onClick={() => this.createOrder()} key={ajoutPanier + this.props.details.name} disabled>Indisponible</button>
  		)
  	}
  	
    return (
      <Card className="menu-veggie">
        <CardBody>
          <img src={details.image} alt={details.name} />
          <h3 className="veggie-name"> 
              {details.name}
              <span className="price">{formatPrice(details.price)}/kg</span>
          </h3>
          <p>{details.desc}</p>
          {quantite}
        	{ajoutPanier}
        </CardBody>
      </Card>
      
    )
  }
}


export default Veggie;

