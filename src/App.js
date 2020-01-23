import React from 'react';
import './App.css';
import Jumbo from './components/jumbotron/jumbo';
import Fitur from './components/fitur/fitur';
import Seller from './components/seller/seller';
import Video from './components/liveVideo/video';
import Data from './components/testimoni/testimoni';
import Blog from './components/blog/blog';
import Support from './components/support/support';
import Footer from './components/footer/footer';

class App extends React.Component {
  render(){
    return(
      <>
        <div className="container">
          <Jumbo />
        </div>
        <div className="container">
          <Fitur />
        </div>
        <div className="container">
          <Seller />
        </div>
          <Video />
        <div className="container">
          <Data/>
        </div>
        <div className="container">
          <Blog/>
        </div>
          <Support/>
        <div className="footer-body">
          <Footer/>
        </div>
      </>
    );
  }
}

export default App;