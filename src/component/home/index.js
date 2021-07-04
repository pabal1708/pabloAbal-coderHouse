/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Home from '../cartWidget'
import SideBar from '../sideBar'


export default function index() {
    

    return (
<div className="containerGral">
      <SideBar />
                <Home
      title={"Bienvenidos a CervezApp"} 
      parrafo={"Navega nuestro menu de exclusivas cervezas"} 
        />   
</div>
    )
}
