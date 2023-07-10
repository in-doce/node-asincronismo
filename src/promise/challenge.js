import fetch from 'node-fetch';
const API_URL = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
}

fetchData(`${API_URL}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API_URL}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(`El producto es: ${product.title}`);
        return fetchData(`${API_URL}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log(`La categoría es: ${category.title}`);
    })
    .catch(error => console.log(`¡¡Este es el error!! => ${error}`))
    .finally(() => {
        console.log('Task is done');
    });