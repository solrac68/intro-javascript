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