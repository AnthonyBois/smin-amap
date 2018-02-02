import React from 'react';
import AddVeggieForm from './AddVeggieForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventaire</h2>
        <AddVeggieForm addVeggie={this.props.addVeggie}/>
        <button onClick={this.props.loadSamples}>Charger des légumes</button>
      </div>
    )
  }
}

export default Inventory;