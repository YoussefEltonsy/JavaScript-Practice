//for loops

const names = ['joe', 'ahmed', 'ali'];
/*
for (let i = 0; i < names.length; i++){
    // console.log(names[i])
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
*/

//while loop
// let i = 0;
// while (i < 5) {
//     console.log("in loop", i);
//     i++;
// }

// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++
// }


//Do while loop
//execute at least once
// let i =5;
// do {
//     console.log('val of i is: ', i);
//     i++
// }while(i <5)

//if statement
// const age = 22;
// if (age > 20) {
//     console.log("Over")
// }

// if (names.length > 2) {
//     console.log("alot of names")
// }

const password = '1234567891012';

if (password.length > 12) {
    console.log("Password is too long")
}
else if (password.length >= 8) {
    console.log("suitable password")
}
else {
    console.log("Password not long enough")
}

