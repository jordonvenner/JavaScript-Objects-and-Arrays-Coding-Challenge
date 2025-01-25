console.log('cc_2.js is successfully linked to index.html!')


//Task 1 working with arrays


let products = ['Oranges', 'Bananas', 'Rice', 'Cake', 'Cereal'];
console.log('Initial product list:',products);

products.push('flour');
console.log('After adding a new product:',products);

products.pop();
console.log('After removing the last product:', products);



//Task 2 Accessing and Modifying Arrays


let scores = [85, 90, 78, 92, 88];
console.log('Initial scores', scores);

scores[1] = 95;
console.log('Updating scores', scores);

let total = 0;

for(let i = 0; i < scores.length; i++) {
    total += scores[i];
}

let average = total / scores.length;
console.log('Average score:', average);


//Task 3 Working with objects

let employee = {
    name: 'Jordon Venner',
    age: 21,
    department: 'Analytics',
    isActive: true
};
console.log('Initial employee object:', employee);

employee.department = 'Marketing';
console.log('After updating department', employee);

employee.position = 'Manager';
console.log('After adding position', employee);


//Task 4 Array of Objects

let customers = [
    {name: 'Alice Feel', email: 'alicef@gmail.com', purchaseAmout: 333},
    {name: 'Jordon Venner', email: 'jordonv@gmail.com', purchaseAmount: 450},
    {name: 'Jammie Fox', email: 'jammief@gmail.com', purchaseAmount: 325}
];
console.log('Initial customer list:', customers);

customers.push({name: 'Alice Green', email: 'aliceg@gmail.com', purchaseAmount: 234});
console.log('After adding a new customer:', customers);