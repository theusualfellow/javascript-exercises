const removeFromArray = function(someArray) {

    if (arguments.length >1 ){
        let i=1;
        let index = [];
        while (i<arguments.length){
            for(let j=0; j<someArray.length; j++){
                if(someArray[j]===arguments[i]){
                    index.push(j);
                }
                else{
                    continue;
                }

            }
            i++;
            }
            let indexSorted = index.sort();
            console.log(indexSorted);
            let k =indexSorted.length-1;
            while(k>=0){
                someArray.splice(indexSorted[k],1);
                k--;
            
            }
            return someArray;
            
        }
        
        

    else{
            return "argument not in array";
        }
    }
        

console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
