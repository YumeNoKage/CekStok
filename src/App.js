import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Jumbo from './components/jumbotron/jumbo';
import Fitur from './components/fitur/fitur';
import Seller from './components/seller/seller';
import Video from './components/liveVideo/video';

class App extends React.Component {
  render(){
    return(
      <>
        <div className="navbar">
          <Navbar />
        </div>
          <Jumbo />
          <Fitur />
          <Seller />
          <Video />
      </>
    );
  }
}

export default App;