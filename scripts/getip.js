const url = "https://api.ipify.org?format=json"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(Object.values(data)[0]);
    })
    .catch(function(error) {
        console.log('Error en ipify', error.message)
    });

