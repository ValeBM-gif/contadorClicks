import React from "react";
import '../estilos/Boton.css'

function Boton({ texto, esBotonDeClick, manejarClic }){
    return(
        <button
            className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" }
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;