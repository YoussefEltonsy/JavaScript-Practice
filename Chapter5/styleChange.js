// const title = document.querySelector('h1');

// title.setAttribute('style', 'margine: 50px') //overwrites instead of adding

// title.style.margin = '50px';
// title.style.color = 'green'
// title.style.fontSize = '50px'
// title.style.margin = ''

// const content = document.querySelector('p');
// console.log(content.classList)
// content.classList.add('error');
// content.classList.remove('error');
// content.innerHTML = 'This is a success msg'
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(element => {
    if (element.textContent.includes('success'))
        element.classList.add('success');
    if (element.textContent.includes('error'))
        element.classList.add('error');
});

const title = document.querySelector('.title')
title.classList.toggle('test');
title.classList.toggle('test');