document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const imageFile = document.getElementById('productImage').files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageSrc = event.target.result;
            saveProduct(name, description, price, imageSrc);
        };
        reader.readAsDataURL(imageFile);
    }
});

function saveProduct(name, description, price, imageSrc) {
    const products = JSON.parse(localStorage.getItem('productos')) || [];
    const newProduct = { id: products.length + 1, nombre: name, descripcion: description, precio: price, imagen: imageSrc };
    products.push(newProduct);
    localStorage.setItem('productos', JSON.stringify(products));

    // Redirigir a index.html
    window.location.href = 'index.html' ;  

}