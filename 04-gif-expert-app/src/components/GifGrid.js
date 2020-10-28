import React, { useState,useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        getGrifs();
    },[])
    const getGrifs = async()=>{
        //peticion http en javascript actual
        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=Rick+and+Morty&api_key=VktEg7Up8BjZ4RVV8BD9Il42bcHzt9M3'
        const resp = await fetch (url);
        const {data} =  await resp.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url:img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages( gifs );
    }
    
    //getGrifs();

    return (
        <div>
            <h3>{category}</h3>
                {
                    images.map( img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    ))
                }
        </div>
    )
}
