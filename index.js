// const BasicCard = require('./BasicCard');
const random = require('./random');
const askQuestion = require('./askQuestion');
const getClozeCards = require('./getClozeCards');
const areWeDoneHere = require('./areWeDoneHere');

const ask = ()=>{
    getClozeCards
    .then(random)
    .then(askQuestion)
    .then(console.log)
    .then(areWeDoneHere)
    .then(done => !done ? ask() : console.log("Thanks for playing, see you soon."))
    .catch(console.log);
}
ask();