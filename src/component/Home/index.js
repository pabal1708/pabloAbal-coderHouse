/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import CartWidget from '../CartWidget'
import SideBar from '../SideBars'


export default function Home() {
    return (
        <div className="containerGral">
            <SideBar />
                <CartWidget
                title={"Bienvenidos a CervezApp"} 
                parrafo={"Navega nuestro menu de exclusivas cervezas"} />   
        </div>
    )
}
