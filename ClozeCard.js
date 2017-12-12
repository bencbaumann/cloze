function ClozeCard(text, cloze){
    this.cloze = cloze;
    this.fullText = text;
    !this.isValidCloze() ? 
        console.log("This is an invalid cloze card") : 
        this.partial = text.replace(this.cloze, '[answer]')
}

ClozeCard.prototype.isValidCloze  = function() {return this.fullText.includes(this.cloze)}

module.exports = ClozeCard;


const sum = (x,y) => x + y;