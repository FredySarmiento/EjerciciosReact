import React, { useState,useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        getGifs( category )
        .then (imgs => setImages(imgs))
    },[])//[] se envia lista de dependencia vacia que es la validacion que haria

    
    //getGrifs();

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">

                {
                    images.map( img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    ))
                }
        </div>
        </>
    )
}
