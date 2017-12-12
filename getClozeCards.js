const {readFile} = require('fs');
const ClozeCard = require('./ClozeCard');
module.exports = new Promise((resolve, reject) => {
    readFile('./clozeCards.json', 'utf8', (err, res)=>{
       if(err){reject(err)}
       resolve(JSON.parse(res).map(card=>new ClozeCard(card.text, card.cloze)));
    });
});
