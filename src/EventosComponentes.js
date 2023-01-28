import React from 'react'

export const EventosComponentes = () => {
    const hasDadoClick = (e,nombre) =>{
        alert("Has dado click al boton  "+nombre);
    }

    function hasDadoDObleClick(e){
      alert("Has dado doble click");
    }

    const hasEntrado = (e,accion) =>{
      console.log(`Has ${ accion } a la caja con el mouse  `);
  }

  const estasDentro = e => {
    console.log("estas dentro del input mete tu nombre !!");
  }

  const estasFuera = e => {
    console.log("estas fuera del input mete tu nombre !!");
  }
  return (
    <div className='eventos-componentes'>
        <h1>Eventos en React</h1>
        <p>
             {/* evento click */}
              {/* <button onClick={(e) => {
              console.log(e);
              console.log("Hola soy un evento click");
              }}>Dame click!</button> */}
              <button onClick={e => hasDadoClick(e,"Silfredo")}>Dame click!</button>
        </p>
       <p>
              {/* evento doble click */}
              <button onDoubleClick={hasDadoDObleClick}>Dame dos click!</button>
       </p>

       <div id='caja'
          onMouseEnter={e => hasEntrado(e,"entrado")}
          onMouseLeave={e => hasEntrado(e,"salido")}
       >
              {/* evento onMouseEnter onMouseLeave */}
              Pasa por encima !!
       </div>

       <p>
        {/* evento onFocus onBlur */}
        <input type="text" onFocus={estasDentro} onBlur={estasFuera} placeholder="Introduce tu nombre..."/>
       </p>
        
    </div>
  )
}
