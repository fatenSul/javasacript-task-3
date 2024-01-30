function fetchProducts() {
    axios.get('https://dummyjson.com/products')
        .then(function (response) {
            displayProducts(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="${product.title}">
            <p>${product.description}</p>
            <button onclick="showProductDetails(${product.id})">Details</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function showProductDetails(productId) {
    window.location.href = `product.html?id=${productId}`;
}

document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});