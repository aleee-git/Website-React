import React from "react";
import "../styles/Testimonios.css"

/* Funcion a mostrar en Main page*/
/* EXPORTACION NOMBRADA OP. 2 = export function Testimonio () { 
Agregar la palabra "props" para trabajar con propiedades */
function Testimonio (props) {
    return (
        /* Componentes de la funcion */
        <div className="cont-testimonio">

            <img className="img-testimonio" src={require("../images/cat.png")} alt="Cat-1"/>

            <div className="info-testimonio">
                {/* Llamar la propiedad para cada item y accedera a nombre */}
                <p className="name-testimonio">{props.nombre} en {props.pais} </p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa} </p>
                <p className="text-testimonio">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book"</p>
            </div>
        </div>
    );
}

/* Exportar para llamar componente */
/* EXPORTACION NOMBRADA OP. 2 = eliminar esta linea */
export default Testimonio;