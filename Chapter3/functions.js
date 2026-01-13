// // function declaration
// function greet() {
//     console.log("Hello there");
// }

//function expression
// const speak = function (name, time) {
//     console .log(`good ${time} ${name}`)
// };

// console.log(name)   //cannot be accessed
// // greet();
// speak('joe', 'morning');

// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;
    
// };

//arrow function
const calcArea = (radius) => { 
    return 3.14 * radius ** 2
};

const greet = () => 'hello world';

const result = greet();
console.log(result)


const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,20,30], 0.1))


const area = calcArea(4);
console.log(area);    