
self.addEventListener('fetch', event => {

  /*if (event.request.url.includes('.jpg')) {

    console.log(event.request.url)

    //let fotoReq = fetch('img/main.jpg')
    //let fotoReq = fetch(event.request.url)
    let fotoReq = fetch(event.request)
    event.respondWith( fotoReq )
    
  }*/

/*if (event.request.url.includes('style.css')) {

  let respuesta = new Response(`
  body {
    background-color: red !important;
    color: pink;
  }
  `,{
    headers: {
      'Content-Type': 'text/css'
    }
  });

  event.respondWith( respuesta )

  
}*/

//------------------------------------------------------

 /*if (event.request.url.includes('style.css')) {

  let respuesta = new Response(`
  img{
    content: url('../img/main-patas-arriba.jpg');
}
  `,{
 headers : {
  'Content-Type': 'text/css'
 }
  })
  
  event.respondWith(respuesta)
}*/

//-----------------------------------------------------

//event.respondWith(  fetch('img/main-patas-arriba.jpg'));

//----------------manejo de errores
const respuesta = fetch(event.request)
.then(resp => resp.ok ? resp : fetch('img/main.jpg') )
  
  //if (resp.ok) return resp;
  //else return fetch('img/main.jpg')
  
  



event.respondWith(
  respuesta
)


});