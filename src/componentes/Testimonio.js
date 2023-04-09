import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimomio' >

      <img className='imagen-testimonio'
      
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Perro.png'
    
      />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre} en {props.pais}</strong></p>
        <p className='cargo-testimonio'> {props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>


      </div>

    </div>

  );


}

export default Testimonio;

