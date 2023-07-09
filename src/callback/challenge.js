const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', urlApi, true);
    xhr.onreadystatechange = function (event) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Si no hay error se ejecuta el callback con el primer parámetro null y el segundo con la respuesta del servidor.
                callback(null, JSON.parse(xhr.responseText));
            } else {
                // En el caso de un error se crea una nueva instancia de Error y se le pasa el mensaje de error.
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhr.send();
}

// fetchData(`${API}/products`, function (error1, data1) {
//     if (error1) return console.error(error1);
//     fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
//         if (error2) return console.error(error2);
//         fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
//             if (error3) return console.error(error3);
//             console.log(data1[0]);
//             console.log(data2.title);
//             console.log(data3.name);
//         });
//     });
// });

fetchData(`${API}/products`, function (error1, data1) {
    // Si error tiene un valor, se ejecuta el return y no se ejecuta el resto del código.
    if (error1) return console.error(error1);
    for (let i = 0; i < data1.length; i++) {
        console.log(data1[i].title);
    }
});