const repeatString = function(string, num) {
        if(num<0) return "ERROR"
        else{string = string.repeat(num);}
        
    
    return string;
};

console.log(repeatString('hey',4));
// Do not edit below this line
module.exports = repeatString;
