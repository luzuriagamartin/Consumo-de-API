//consumir una API externa - diferentes maneras de hacerlo.

/* window.onload =() =>{
}*/

//-----------

window.addEventListener('load', () =>{

    //capturar los elementos
    let populares = document.querySelector('#populares');

    //consumir la API
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b71b5eb3fa1651f02880116c6ce48042&language=en-US&page=1')
    .then(respuesta => {
        return respuesta.json()
    })
    .then(peliculasPopulares => {
        //console.log(peliculasPopulares)
    for(let i = 0; i < peliculasPopulares.results.length; i++){
        populares.innerHTML += `<li>
                                <img src="https://image.tmdb.org/t/p/w500${peliculasPopulares.results[i].poster_path}" alt="${peliculasPopulares.results[i].title}">
                                <div class="uk-position-center uk-panel"></div>
                            </li>`

        }

    
    })

})


