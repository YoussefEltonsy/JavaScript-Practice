// callbacks $ foreach
let people = ['joe', 'ahmed', 'ali', 'hassan'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
 };

people.forEach( logPerson);

const myFunc = (callBackFunc) => {
    let value = 50;
    callBackFunc(value);
}