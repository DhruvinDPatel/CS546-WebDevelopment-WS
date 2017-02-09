const fs = require('fs');

let textMatric = exports = module.exports;

textMatric.simplify = (text, error) => {
    try{
        text = text.toLowerCase();
        text = text.replace(/\s+/g, ' ');
        text = text.replace(/[^a-z0-9]+/g, " "); //g-global
        return text;
    }catch(error){
        return(error);
    }
}

textMatric.createMatrics = (text, error) =>{
    let totalLetters = 0;
    let totalWords = 0;
    let wordDictionary = 0;
    let wordFrequency = {};
    let longWords = [];
    let avgWordLength = 0;
    try{
        text = textMatric.simplify(text);
        totalLetters = text.replace("/[^A-Z]/gi","").length;
        totalWords = text.split(' ').length;
        wordDictionary = text.split(' ');
        
        for(let i=0; i<wordDictionary.length; i++){
            if(wordFrequency[wordDictionary[i]] != null){
                wordFrequency[wordDictionary[i]] += 1;
            }else{
                wordFrequency[wordDictionary[i]] = 1;
            }
        }

        for(let i=0; i<wordDictionary.length; i++){
            if(wordDictionary[i].length >= 6){
                longWords.concat();
            }
        }
    }catch(error){
        return(error);
    }
}