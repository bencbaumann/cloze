var inquirer = require('inquirer');
module.exports = () => {
    return new Promise((resolve, reject) => {
        
    const questions = [];
    questions.push({
        type: 'input',
        name: 'answer',
        message: 'Are we done here?',
        default: false
    });

    inquirer.prompt(questions)
        .then(answer=>{
            answer.answer ==='yes' ? resolve(true) : resolve(false);
        })
        .catch(reject);
});
}