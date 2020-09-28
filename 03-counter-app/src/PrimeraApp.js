import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo,subtitulo}) => {

    return(
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
            
        </>
    );
}
//propiedades obligatorias
PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired
}
//propiedades por defecto 
PrimeraApp.defaultProps={
    subtitulo:'Soy un subtitulo'
}
export default PrimeraApp;