const sumAll = (...num) => {
    
    newNum = num.sort()
    number1 = newNum[0]
    number2 = newNum[1]
    if(typeof number1 != "number" || typeof number2 != "number" ||number1<0 ||number2<0){
        return "ERROR";
    }
    else{
        let sum = 0;
        for(let i = number1; i<= number2; i++){
            sum += i;
        }
        return sum;
    }
    
    
  
}

console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;
