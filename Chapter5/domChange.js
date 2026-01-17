const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = "Text is changed"

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' Added text'
// })

const content = document.querySelector('.content');

// content.innerHTML += '<h2>This is the new content</h2>'

// const people = ['joe', 'ahmed', 'ali'];

// people.forEach(person => {
//     content.innerHTML +=`<p>${person}</p>`
// })

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://facebook.com');
link.innerText = 'Link changed';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success')
console.log(msg.getAttribute('class'));

msg.setAttribute('style', 'color: green');

