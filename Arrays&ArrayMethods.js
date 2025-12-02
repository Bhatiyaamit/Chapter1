const products = [
    {name: 'Laptop' , price: 99999},
    {name: 'Smartphone' , price: 49999},
    {name: 'Tablet' , price: 29999},
    {name: 'Monitor' , price: 19999},
    {name: 'Keyboard' , price: 9999}    
]
const filteredProducts = products.filter(product => product.price > 20000);
console.log(filteredProducts);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);