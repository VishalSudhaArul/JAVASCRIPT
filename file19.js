const products = [
    { id: 1, name: "product1", disc: "disc1", price: 1000 },
    { id: 2, name: "product2", disc: "disc2", price: 2000 },
    { id: 3, name: "product3", disc: "disc3", price: 3000 }
];

let cart = [];

products.forEach((product) => {

    const obj = {
        ...product,
        quantity: 1,
        total: product.price * 1,
    };

    cart = [...cart, obj];
});

console.log(cart);
