const repeatString = function(str, numOfTimes) {
    let arr=[];
    if(numOfTimes<0){
        return("ERROR");        
    }
    else{
        for(let i =0; i<numOfTimes; i++){
                
                arr.push(str);
            }
            return arr.join('');
    }
    
};
console.log(repeatString('hello',0));

// Do not edit below this line
module.exports = repeatString;
