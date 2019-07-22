import React, { Component } from 'react';
import './App.css';
import CameraShop from './components/CameraShop';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    cameras: []
  }
  render() {
    return (
      <div className="App d-flex flex-column justify-content-between">
        <Header className="App-header" />
        <div className="main container-fluid p-4">
          <div className="row">
            <div className="cameraShop col-md-9">
              <CameraShop />
            </div>
            <div className="App-cart col-md-3 bg-light py-3">
              <Cart />
            </div>
          </div>
        </div>
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
