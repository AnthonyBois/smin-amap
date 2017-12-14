import React from 'react';
import { getFunName } from '../helpers'
import PropTypes from 'prop-types'

class StorePicker extends React.Component{
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    
     goToStore(event) {
        event.preventDefault();
        console.log("Tu as changé l'URL");
        // On récupère le texte entré dans le formulaire
        const storeId = this.storeInput.value;
        console.log(`On va vers ${storeId}`);
        // Ensuite on va se déplacer de / vers /store/:storeId
        console.log(this);
        this.props.history.push(`store/${storeId}`);
    }
    
    render(){
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Entrez un nom de magasin</h2>
                <input type="text" ref={(input) => {this.storeInput = input}} required placeholder="Nom du magasin" defaultValue={getFunName()}/>
                <button type="submit">Visiter le magasin </button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: PropTypes.object
}
export default StorePicker;