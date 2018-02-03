import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';


class AddVeggieForm extends React.Component {
  createVeggie(event) {
    event.preventDefault();
    // On stocke les valeurs du form dans une variable veggie
    const veggie = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
      nombreProduitDispo: this.nombreProduitDispo.value,
    }
    // On envoie cette variable via des props à la méthode addVeggie()
    this.props.addVeggie(veggie);
    this.veggieForm.reset();
  }

render() {
    return (
      <Card>
        <CardBody>
          <form ref={(input) => this.veggieForm = input} className="veggie-edit" onSubmit={(e) => this.createVeggie(e)}>
            <FormGroup>
              <input ref={(input) => this.name = input} type="text" placeholder="Nom" />
            </FormGroup>
            <FormGroup>
              <input ref={(input) => this.price = input} type="text" placeholder="Prix" />
            </FormGroup>
            <FormGroup>
              <select ref={(input) => this.status = input}>
                <option value="available">Frais !</option>
                <option value="unavailable">Plus en stock !</option>
              </select>
            </FormGroup>
            <FormGroup>
              <input ref={(input) => this.nombreProduitDispo = input} type="text" placeholder="Quantité disponible (en kg )" />
            </FormGroup>
            <FormGroup>
              <textarea ref={(input) => this.desc = input} placeholder="Description" ></textarea>
            </FormGroup>
            <FormGroup>
              <input ref={(input) => this.image = input} type="text" placeholder="Image" />
            </FormGroup>
            <Button color="success" type="submit">+ Ajouter un article</Button>
          </form>
        </CardBody>
      </Card>
    )
  }
}

export default AddVeggieForm;

