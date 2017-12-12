var inquirer = require('inquirer');
module.exports = card =>{
    return new Promise((resolve, reject) => {
        
        const questions = [];
        questions.push({
            type: 'input',
            name: 'answer',
            message: card.partial || card.front,
            default: false
        });

        inquirer.prompt(questions)
            .then(answer=>{
                if(card.cloze === answer.answer){
                    resolve(`Your answer was: ${answer.answer}, which is the correct answer, great job!`);
                }
                else {
                    resolve(`Your answer was: ${answer.answer}, the correct answer is ${card.cloze}`);
                }
            })
            .catch(reject);
    });
}