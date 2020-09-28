import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({valor= 10}) => {
    
    const [ counter, setCounter ] = useState(valor);//retorna un areglo
    
    //handleAdd
    const handleAdd = ()=>{
        setCounter(counter + 1);
        //setCounter((c)=>+1)
    }
    const handleRestore = ()=>{
        setCounter(valor);
        //setCounter((c)=>+1)
    }
    const handleSubtract = ()=>{
        setCounter(counter - 1);
        //setCounter((c)=>+1)
    }

    return(
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd }>+ 1</button>
        <button onClick={ handleRestore }>Reset</button>
        <button onClick={ handleSubtract }>- 1</button>
    </>
    );
}

CounterApp.propTypes={  
    valor:PropTypes.number
}

export default CounterApp;

