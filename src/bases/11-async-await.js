// const getImagePromesa = () => {
//     return new Promise((resolve, reject) => {
//         resolve('https://ejemplo.com')
//     })
// }

// getImagePromesa().then(console.log);

// Transforma la funcion en una promesa
const getImage = async() => {
    return 'https://ejemplo2.com'
}

console.log(getImage());
getImage().then(console.log)


//------------------------------------------------------------

const getImagen = async() => {

    try {
        const apiKey = 'N0JwxV8FKP8t60olsuZGNgaQhctZy9DW';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        //console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
    
}

getImagen();



// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         //console.log(data.images.original.url);
//         const {url} = data.images.original;
//         //console.log(url);

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn)
