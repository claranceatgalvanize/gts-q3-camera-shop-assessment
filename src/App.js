import React, { Component } from 'react';
import './styles/App.css';
import CameraShop from './components/CameraShop';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  state = {
    cameras: [],
    searchString: ""
  }

  gettAllCameras = async () => {
    try {
      const res = await fetch('http://localhost:8000/cameras')
      const cameraData = await res.json()
      this.setState({ cameras: cameraData })
    } catch ( error ) {
      console.log( error )
    }
  }

  componentDidMount = async () => { this.gettAllCameras() }

  handleSearch = userInput => {
    this.setState({ searchString: userInput})
  }

  addToCart = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/cameras/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ inCart: true }),
        headers: { 'Content-Type': 'application/json' }
      })
      if(res.ok){
        console.log(res)
      }
    } catch  ( error ) {
      console.log( error )
    }
    this.gettAllCameras()
  }

  removeFromCart = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/cameras/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ inCart: false }),
        headers: { 'Content-Type': 'application/json' }
      })
      if(res.ok){
        console.log(res)
      }
    } catch  ( error ) {
      console.log( error )
    }
    this.gettAllCameras()
  }

  
  render() {

    const searchResult = this.state.cameras.filter( camera => {
      return camera.name.toLowerCase().includes(this.state.searchString.toLowerCase()) && 'No match found!';
    })

    const cartItems = this.state.cameras.filter( camera => camera.inCart );
    let subtotal = 0, tax = 0, total = 0;
    if( cartItems.length !== 0 ) {
      subtotal = cartItems.reduce(( acc, camera ) => acc + camera.price, 0);
      tax = subtotal * 0.086
      total = tax + subtotal
    } else {
      subtotal = 0
      tax = 0
      total = 0
    }


    return (
      <div className="App d-flex flex-column justify-content-between">
        <Header className="App-header" />
        <div className="main container-fluid py-4">
          <div className="row">
            <div className="cameraShop col-md-9">
              <CameraShop 
                cameras={ searchResult }
                addToCart={ this.addToCart }
                handleSearch={ this.handleSearch }
              />
            </div>
            <div className="App-cart col-md-3 bg-light py-3">
              <Cart 
                removeFromCart={ this.removeFromCart }
                cartItems={ cartItems }
                subtotal={ subtotal.toFixed(2)}
                total={ total.toFixed(2) }
                tax={ tax.toFixed(2) }
              />
            </div>
          </div>
        </div>
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
