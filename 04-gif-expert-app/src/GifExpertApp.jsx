import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
    //manejo de arreglos mediante useState
    const [categories, setCategories] = useState (['One Punch', 'Samurai X','Dragon Ball']);
    
    //const handleAdd = () =>{
    //    /* setCategories([...categories, 'HunteXHunter']) */
    //    setCategories(categ=>[...categ, 'HunterxHunter']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            <ol>
            {
                categories.map(category =>{
                    return <li key={category}>{category}</li>
                })
            }
            </ol>

        </>
    )
}
