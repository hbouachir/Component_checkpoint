import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './profile/Address'
import FullName from './profile/FullName'
import ProfilPhoto from './profile/ProfilPhoto'

function Main() {
  return (
    <div className="App">
     <FullName/>
     <Address/>
     <ProfilPhoto/>


     
    </div>
  );
}

export default Main;
