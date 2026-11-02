const data = {
  products: [
    {
      id: 26,
      title: "Green Chili Pepper",
      price: 0.99,
    },
    {
      id: 27,
      title: "Honey Jar",
      price: 6.99,
    },
    {
      id: 28,
      title: "Ice Cream",
      price: 5.49,
    },
    {
      id: 29,
      title: "Juice",
      price: 3.99,
    },
    {
      id: 30,
      title: "Kiwi",
      price: 2.49,
    },
    {
      id: 31,
      title: "Lemon",
      price: 0.79,
    },
    {
      id: 32,
      title: "Milk",
      price: 3.49,
    },
    {
      id: 33,
      title: "Mulberry",
      price: 4.99,
    },
    {
      id: 34,
      title: "Nescafe Coffee",
      price: 7.99,
    },
    {
      id: 35,
      title: "Potatoes",
      price: 2.29,
    },
  ],
  total: 194,
  skip: 25,
  limit: 10,
};



// destructuring the data object
const { total, skip, limit } = data;
console.log(products);

// destructuring in array
const [a, b, c] = data.products;
console.log(a);
console.log(b);
console.log(c);

// destructuring the products array
const [product1, product2, product3, product4, product5] = data.products;
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);

// equality 
let i = [10, 20, 30];
let j = [10, 20, 30];

console.log(i == j); // false
console.log(i === j); // false

// equality with destructuring
let [x, y, z] = [10, 20, 30];
let [p, q, r] = [10, 20, 30];

console.log(x == p); // true
console.log(y === q); // true
console.log(z === r); // true


let k = i; // [10, 20, 30]
console.log(i == k); // true
console.log(i === k); // true