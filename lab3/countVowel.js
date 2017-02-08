let numVowels = 0;
let vowels = ["a", "e", "i", "o", "u"];

let str = "Hello World";

for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) >= 0) {
        numVowels++;
        console.log(`Found vowel :${str[i]} at index ${i}`);
    }
}

console.log(`For string: ${str} total number of Vowels in string is :${numVowels}`);