//fetch api

// fetch('todos/youssef.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }) .catch((err) => {
//     console.log('rejected', err);
// });

//async & await

const getTodos = async () => {
    
    const response = await fetch('todos/youssefs.json')

    if (response.status !== 200) {
        throw new Error('Cannot fetch data');
    }

    const output = await response.json();
    return output;

};

getTodos()
    .then( data => console.log('resolved', data) )
    .catch(err => console.log('rejected', err.message))
