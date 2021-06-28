const apiKey = 'N0JwxV8FKP8t60olsuZGNgaQhctZy9DW';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion.then(resp => {
    //console.log(resp);
    resp.json().then(data => {
        console.log(data)
    })
})
.catch(console.warn)