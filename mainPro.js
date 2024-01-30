
function fetchProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    axios.get(`https://dummyjson.com/products/${productId}`)
        .then(function (response) {
            displayProductDetails(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details');
    productDetailsContainer.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}">
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    fetchProductDetails();
});
