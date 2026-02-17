const products = [
    { id: 1, name: "Product1", desc: "This is description", price: 100, category: "Laptop" },
    { id: 2, name: "Product2", desc: "This is description", price: 600, category: "Desktop" },
    { id: 3, name: "Product3", desc: "This is description", price: 200, category: "Pendrive" },
    { id: 4, name: "Product4", desc: "This is description", price: 500, category: "Printer" },
    { id: 5, name: "Product5", desc: "This is description", price: 400, category: "Keyboard" },
    { id: 6, name: "Product6", desc: "This is description", price: 300, category: "Mouse" }
];

let search = "Laptop";

const resultArray = products.filter(product => product.category === search);

console.log(resultArray);
