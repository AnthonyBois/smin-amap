import React from 'react';
import Order from './components/Order';
import Header from './components/Header';
import Inventory from './components/Inventory';

class App extends React.Component{
    render(){
        return (
                <div className="apam">
                    <div className="menu">
                        <Header />
                    </div>
                    <Order />
                    <Inventory />
                </div>
            )
    }
}
export default App;