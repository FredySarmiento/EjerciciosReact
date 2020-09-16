const getImagen = async()=>{

    try{
        const apiKey='VktEg7Up8BjZ4RVV8BD9Il42bcHzt9M3';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} =data.images.original;
        const img =document.createElement('img');
        img.src=url;
        document.body.append(img);
    }catch(error){
        //manejo del error
        console.error(error)
    }

}
getImagen();

