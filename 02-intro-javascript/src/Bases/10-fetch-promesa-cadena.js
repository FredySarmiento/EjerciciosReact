//Uso de fetchAPI
const apiKey='VktEg7Up8BjZ4RVV8BD9Il42bcHzt9M3';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//promesas en cadena
peticion
    .then(resp=>resp.json())
    .then(({data}) => {
        const {url} =data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);

    })
.catch(console.warm);