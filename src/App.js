import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import PageBody from "./components/Body";



function App() {
  return (
    <div className='App'>
      <div className='Wrapper'>
      <Navbar className='sticky-top'/>
      </div>
      <div className='Wrapper2'>
      <PageBody />
      </div>
    </div>
  );
}



export default App;
