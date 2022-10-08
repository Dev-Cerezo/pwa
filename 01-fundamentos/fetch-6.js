
fetch('no-enontrado.html')
.then( resp => resp.text() )
.then( html => {

    let body = document.querySelecto('body');
    body.innerHTML = html;
    console.log(html)

})
.catch(error => {
    console.log('Érror en la peticion');
    console.log(error);
})