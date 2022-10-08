

self.addEventListener('fetch', event => {

    /*const offlineResp = new Response(`
    Bienvenido a mi pagina web

    Disculpa, pero para usarla, necesitas conexión a internet
    `);*/

    /*const offlineResp = new Response(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mi PWA</title>

    <h1>modo offline</h1>

    <link rel="stylesheet" href="css/style.css">
</head>
<body class="container p-3">

</body>
</html>
    `,{
        headers: {
            'Content-Type': 'text/html' 
        }
    })*/

    const offlineResp = fetch('pages/offline.html')
    const resp = fetch(event.request).catch( () => offlineResp);
    

    event.respondWith( resp );
})