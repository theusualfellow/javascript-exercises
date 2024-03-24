const fibonacci = function(number) {
    strictNum= Number(number)
    if (strictNum<0 || isNaN(strictNum)){
        return "OOPS"
    }
    if(strictNum==0){
        return 0
    }
    let array = [1,1]
    for(let i=0; i<strictNum; i++){
        
        array.push(array[i]+array[i+1])
    }
    return array[strictNum-1]
};
console.log(fibonacci("yo"))
// Do not edit below this line
module.exports = fibonacci;
