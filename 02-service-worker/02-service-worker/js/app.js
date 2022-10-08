//if ('serviceWorker' in navigator){
  //  console.log('podemos usarlo')
//}

//confirmamos que si podemos usar el sw
if (navigator.serviceWorker) {
   navigator.serviceWorker.register('/sw.js') //instala el service worker
}

