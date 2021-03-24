import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Footer, Products, Shapka} from "./components/All_components";


function App() {
  return (
      <div className="App">
        <Shapka />
        <main className='main'>
          <div className='leftpart'>leftPart</div>
          <div className='center'>
            <div className='differentproduct'><Products title='title 1' price = {11} description = 'description of product 1'/></div>
            <div className='differentproduct'><Products title='title 2' price = {22} description = 'description of product 2'/></div>
            <div className='differentproduct'><Products title='title 3' price = {33} description = 'description of product 3'/></div>
            <div className='differentproduct'><Products title='title 4' price = {44} description = 'description of product 4'/></div>
            <div className='differentproduct'><Products title='title 5' price = {55} description = 'description of product 5'/></div>
            <div className='differentproduct'><Products title='title 6' price = {66} description = 'description of product 6'/></div>
            <div className='differentproduct'><Products title='title 7' price = {77} description = 'description of product 7'/></div>
            <div className='differentproduct'><Products title='title 8' price = {88} description = 'description of product 8'/></div>
            <div className='differentproduct'><Products title='title 9' price = {99} description = 'description of product 9'/></div>
          </div>
          <div className='rightpart'>rightPArt</div>
        </main>
        <Footer/>
      </div>
  );
}

export default App;