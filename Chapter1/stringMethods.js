let email = 'youssef@gmail.com';

// let result = email.lastIndexOf('m')
// let result = email.slice(0,7)
// let result = email.substr(4,10)
// let result = email.replace('m', 'w')    //first letter that it finds only

// console.log(result)


//template string
const title = 'Youssef photo';
const author = 'Tonsy';
const comments = 15;

let result = `The photo called ${title} by ${author} has ${comments}`;
console.log(result);

//creating html templates
let html = `
<h2? ${title} </h2>
<p> By ${author}</p>
<span>has ${comments} </span>

`
console.log(html)