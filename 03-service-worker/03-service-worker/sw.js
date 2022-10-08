
// Ciclo de vida del SW

self.addEventListener('install', event => {

    //Descargar assets
    //creammos un cache
    console.log('instalando: SW')

    setTimeout(() => {
        console.log('SW: Instalaciones termianadas')
    }, 1000);

 //self.skipWaiting(); //activa automaticamente el service worker

})

//Cuando el sw toma el control de la aplicacion
self.addEventListener('activate', event => {

    //borrar cache
    
  const instalacion = new Promise((resolve, reject) => {

        setTimeout ( () => {
        console.log('SW 2: instalaciones terminadas')
        self.skipWaiting();
      resolve()
        },1000)
 })

 event.waitUntil(  instalacion );

})

//FETCH Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    //aplicar las estrategias del cache
    console.log( 'SW 2:', event.request.url)

    if (event.request.url.includes('https://reqres.in/')) {
        const resp = new Response( `{ok: false, mensaje: 'jajajaja'}`)

        event.respondWith( resp )
    }
 
  
})



