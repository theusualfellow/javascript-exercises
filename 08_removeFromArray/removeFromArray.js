const removeFromArray = function(arr, ...userInput) {
    let elementsInCommon= userInput.filter(item=>arr.includes(item));
    arr=arr.filter(item=>!elementsInCommon.includes(item));
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;



console.log(removeFromArray([1,2,3,4,4], 4,3,9,'sandeep'));