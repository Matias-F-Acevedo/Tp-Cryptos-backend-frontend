import React, { useRef, useState } from "react";
import "./Card.css"

function Card({crypto}) {


    return (

        <>
        <div id={crypto.id} className="card">
            <div className="container-img">
              <img src={crypto.img} alt={crypto.name} />  
            </div>
            <div className="contenido">
            <h1>{crypto.name}</h1>
            <h2>Price: ${crypto.price}</h2>
            <h3>Volume: ${crypto.volume}</h3>
            </div>
        </div>
        
        </>
    )
}


export default Card;


