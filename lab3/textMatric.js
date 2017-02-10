const fs = require('fs');

let textMatric = exports = module.exports;

textMatric.simplify = (text, error) => {
    try{
        text = text.toLowerCase();
        text = text.replace(/\s+/g, ' ');
        text = text.replace(/[^a-zA-Z0-9]+/g, " "); 
        return text;
    }catch(error){
        return(error);
    }
}

textMatric.createMatrics = (text, error) =>{
    let result = new Object();
    let totalLetters = 0;
    let totalWords = 0;
    let wordDictionary = 0;
    let wordFrequency = {};
    let longWords = 0;
    let avgWordLength = 0;
    let uniqueWords = 0;
    try{
        text = textMatric.simplify(text);
        wordDictionary = text.split(' ');
        totalWords = text.split(' ').length;
        totalLetters = text.replace(/ /g,'').length; //replace('/[a-z]/gim');
        
        for(let i=0; i<wordDictionary.length; i++){ //for perticular word Frequency
            let temp = wordDictionary[i];
            if(wordFrequency[temp] != null){
                wordFrequency[temp] += 1;
            }else{
                wordFrequency[temp] = 1;
            }

            if(temp.length >=6){                    // for long words
                longWords++;
            }
        }
        
        avgWordLength = totalLetters/totalWords;
        uniqueWords = Object.keys(wordFrequency).length;
        
        result['totalLetters'] = totalLetters;
        result['totalWords'] = totalWords;
        result['uniqueWords'] = uniqueWords;
        result['longWords'] = longWords;
        result['averageWordLength'] = avgWordLength;
        result['wordOccurrences'] = wordFrequency;

        return(result);
    }catch(error){
        return(error);
    }
}