const palindromes = function (string) {
    const noSpace=string.toLowerCase().replace(/[,\s.!]/g, "")
    const reverseWord = noSpace.split("").reduce((firstWord, lastWord)=> lastWord+firstWord);
    console.log(noSpace)
    console.log(reverseWord)
    if(noSpace==reverseWord){
        return true
    }
    else{
        return false
    } 

};

console.log(palindromes("sandeep"))
// Do not edit below this line
module.exports = palindromes;
