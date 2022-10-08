function test(){
    fetch('https://api.gec.org.mx/api/getCecos/')
    .then(resp => resp.json())
    .then( respObj => {
        console.log(respObj)
    });
}


