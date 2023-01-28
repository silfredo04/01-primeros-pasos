import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = ({nombre,apellido,ficha}) => {
    
  return (
    <div className='tercer-componente'>
        <h1>Comunicacion entre componentes</h1>
        <h2>Datos personales</h2>
        <ul>
            <li>
                Nombre: {nombre}
            </li>
            <li>
                Apellido: {apellido}
            </li>
            <h2>Ficha medica</h2>
            <li>
                Alergias: {ficha.Alergias}
            </li>
            <li>
                Altura: {ficha.altura}
            </li>
            <li>
                Estado: {ficha.estado}
            </li>
            <li>
                Grupo: {ficha.grupo}
            </li>
        </ul>
    </div>
  )
};

TercerComponente.propTypes ={
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string.isRequired,
    ficha:PropTypes.object
}

TercerComponente.defaultProps ={
    nombre:'Danilo',
    Apellido:'Orozco'
}