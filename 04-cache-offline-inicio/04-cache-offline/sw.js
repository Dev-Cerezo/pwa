//const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_DYNAMIC_LIMIT = 50;

const CACHE_INMUTABLE_NAME = 'inmutable-v1';



function limpiarCache( cacheName, numeroItems ) {

caches.open( cacheName )
.then( cache => {

  return cache.keys()
  .then( keys => {
    return cache.keys()
    .then( keys => {
        if (keys.length > numeroItems) {
          cache.delete( keys[0])
            .then(limpiarCache(cacheName, numeroItems)) ;
        }
    });
    
  } );

} );

}

 self.addEventListener('install', e => {



    const cachePromesa = caches.open( CACHE_STATIC_NAME )
    .then( cache => {

 return cache.addAll([
    '/',
    '/index.html',
    '/css/style.css',
    '/img/main.jpg',
    '/js/app.js',
    '/img/no-img.jpg'
 ]);

});

const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
.then( cache => cache.add( 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));


e.waitUntil( Promise.all([cachePromesa, cacheInmutable]) )

})

self.addEventListener('fetch', e => {

  //5.-Cache with network race

 const respuesta = new Promise((resolve, reject) => {

  let rechazada = false;

  const falloUnavez = () => {

  if (rechazada) {

    if (/\.(png|jpg)$/i.test(e.request.url)) {
     
      resolve( caches.match('/img/no-img.jpg') )

    }else{
      reject('no se encontro respuesta')
    }
    
  }else{
    rechazada = true;
  }

  }


  fetch( e.request ).then(res => {

  res.ok ? resolve(res) : falloUnavez();

  }).catch( falloUnavez )

  caches.match( e.request ).then(res => {
    res ? resolve(res) : falloUnavez();
  }).catch( falloUnavez )

 })

  e.respondWith( respuesta );

  // 4.- cache with network update
  //Rendimiento critico
  //Siempre estaran un paso atras

  /*if(  e.request.url.includes('bootstarp')){
    return e.respondWith( caches.match(  e.request ));
  }

 const respuesta = caches.open( CACHE_DYNAMIC_NAME ).then( cache => {
    fetch( e.request ).then( newRes => 
      cache.put( e.request, newRes ))

      return cache.match(  e.request );
  });

  e.respondWith( respuesta );*/

  // 3.-network with cache fallback

/*const respuesta =  fetch(e.request).then( res => {

  if (!res) return caches.match( e.request )


    caches.open(  CACHE_DYNAMIC_NAME)
   .then( cache => {
    cache.put(e.request, res);
    limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT)
   });

    return res.clone();
  }).catch( err => {
    return caches.match( e.request )
  })

 e.respondWith(respuesta)*/

//2.-cache with network fallback 
/*const respuesta = caches.match( e.request )
.then(res => {
    if(res) return res;

    //no existe el archi y por lo tanto hay que ir a la red

    console.log('no existe', e.request.url)

   return fetch( e.request ).then( newResp => {

    caches.open( CACHE_DYNAMIC_NAME )
    .then( cache => {
        cache.put(e.request, newResp )
        limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT)
    });
    return newResp.clone();
   }); 
});
e.respondWith( respuesta )

//1.-only catch
//e.respondWith( caches.match(e.request))*/
})

