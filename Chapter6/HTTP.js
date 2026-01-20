const getTodos = (resource, callBack) => {
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        callBack(undefined,data);
    }
    else if (request.readyState === 4) {
        callBack('could not fetch data', undefined);
    }
})

request.open('GET', resource)
request.send();
}


console.log(1);
console.log(2);

//async code
getTodos('todos/youssef.json', (err, data) => {
    console.log("callBack fired")
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log(3);
console.log(4);