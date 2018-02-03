import React from 'react';
import AddVeggieForm from './AddVeggieForm';
import { Button } from 'reactstrap';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventaire</h2>
        <AddVeggieForm addVeggie={this.props.addVeggie}/>
        <Button color="info" onClick={this.props.loadSamples}>Charger des légumes</Button>
      </div>
    )
  }
}

export default Inventory;