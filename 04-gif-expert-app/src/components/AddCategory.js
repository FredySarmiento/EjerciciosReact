import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const hadleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length){
            setCategories(categ=>[...categ, inputValue])
            setInputValue('')
        }
        //console.log('Submit hecho')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue} 
                onChange={hadleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes ={
    setCategories:PropTypes.func.isRequired
}