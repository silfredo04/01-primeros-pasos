// importar modulos de react  / dependencias 
import React, {Fragment} from "react";

// Funcion del componente
const MiComponente = () =>{

    let nombre = "Silfredo Orozco";
    let web = "sorozcom.com";
    let usuario = {
        Nombre:'Silfredo',
        Apellido:'Orozco',
        Web:'Sorozco.com'
    };

    console.log(usuario);

    return(
        <div className="mi-componente">
            <h2>Componente creado</h2>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>
                    Nombre: <strong>{usuario.Nombre}</strong>
                </li>
                <li>
                    Apellido: <strong>{usuario.Apellido}</strong>
                </li>
                <li>
                    Web: <strong>{usuario.Web}</strong>
                </li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );
};

// Exportar el componente
export default MiComponente;