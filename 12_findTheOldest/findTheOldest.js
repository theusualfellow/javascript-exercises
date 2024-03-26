const findTheOldest = function(people){
    const today = new Date()
    const year = today.getFullYear()
    const newArray= people
    .sort(function(person1, person2){
        if(person1.yearOfDeath == undefined){
            person1.yearOfDeath = year
        }
        else if(person2.yearOfDeath == undefined){
            person2.yearOfDeath = year
        }
        else{
            const age1 = person1.yearOfDeath-person1.yearOfBirth
            const age2 = person2.yearOfDeath-person2.yearOfBirth
            return age2-age1
        }
        const age1 = person1.yearOfDeath-person1.yearOfBirth
        const age2 = person2.yearOfDeath-person2.yearOfBirth
        return age2-age1

        
    }
    
    )
    return newArray[0]
    }
   
  console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
