import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Footer, Product, Shapka} from "./components/All_components";


function App() {
  return (
      <div className="App">
        <Shapka />
        <main className='main'>
          <div className='leftpart'>leftPart</div>
          <div className='center'>
            <div className='differentproduct'><Product title='title 1' price = {1} description = 'description of product 1'/></div>
            <div className='differentproduct'><Product title='title 2' price = {2} description = 'description of product 2'/></div>
            <div className='differentproduct'><Product title='title 3' price = {3} description = 'description of product 3'/></div>
            <div className='differentproduct'><Product title='title 4' price = {4} description = 'description of product 4'/></div>
            <div className='differentproduct'><Product title='title 5' price = {5} description = 'description of product 5'/></div>
            <div className='differentproduct'><Product title='title 6' price = {6} description = 'description of product 6'/></div>
            <div className='differentproduct'><Product title='title 7' price = {7} description = 'description of product 7'/></div>
            <div className='differentproduct'><Product title='title 8' price = {8} description = 'description of product 8'/></div>
            <div className='differentproduct'><Product title='title 9' price = {9} description = 'description of product 9'/></div>
          </div>
          <div className='rightpart'>rightPArt</div>
        </main>
        <Footer/>
      </div>
  );
}

export default App;