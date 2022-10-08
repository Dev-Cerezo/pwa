

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

/*if (window.caches) {

    caches.open('prueab -1')
    caches.open('prueab -2') //si no existe genera el cache prueba -2

    //caches.has('prueba-3') //confirma si existe el cache prueba-3
    //.then(console.log)

    // caches.delete('prueba-1').then(console.log) elimina el cache prueba-1

    caches.open('cache-v1.1').then(cache => {

        //cache.add('/index.html')

        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then( () => {
            //cache.delete('/css/style.css')
          

            cache.put( 'index.html', new Response('Hola mundo') ); //reemplaza index.html por hola mundo
          //  cache.match('index.html').then(resp => {

            //  resp.text().then( console.log)

            //})
        })

caches.keys()
.then(keys => {
    console.log(keys)
})

      })
}*/