const reverseString = function(string) {
    let strLength = string.length -1;
    let newString = "";
    while(strLength>=0){
        newString += string.charAt(strLength);
        strLength-- ;
    }
    return newString;
};
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
