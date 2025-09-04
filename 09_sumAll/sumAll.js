const sumAll = function(a,b) {  
    let allNumbers = [];
    if(Number.isInteger(a)&&Number.isInteger(b)&&a>0&&b>0){

        if(a<b){
            for(i=a; i<=b;i++){
                console.log(i);
                allNumbers.push(i);
            }
        return allNumbers.reduce((num1,num2)=>num1+num2);
        }
        else{
            for(i=b; i<=a;i++){
                console.log(i);
                allNumbers.push(i);
            }
        return allNumbers.reduce((num1,num2)=>num1+num2);
        }
    }
    else return('ERROR');
};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(1,5));