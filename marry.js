function  validProposal( person1 , person2 ) {
    // console.log(person1);
    // console.log(person2);
    // let genderArray = [];
    // genderArray.push(person1.gender);
    // genderArray.push(person2.gender);
    // console.log(genderArray);
    let ageDifference = Math.abs(person1.age - person2.age);
    // console.log(ageDifference)
    // console.log(typeof(person1));
    // console.log(typeof(person2))
    if(typeof(person1) === "object" && typeof(person2) === "object" && !Array.isArray(person1) && !Array.isArray(person2)){
        if(person1.gender !== person2.gender && ageDifference <= 7){
            return true;
        }
        return false;
    }
    return "Invalid";   
}
let person1 = { name: "Rahul", gender: "male", age: 28 };
let person2 = { name: "Joya", gender: "female", age: 21 };
let output4 = validProposal(person1, person2);
console.log(output4)

person1 = "Mizan";
person2 = { name: "mitu", gender: "male", age: 32 };
output4 = validProposal(person1, person2);
console.log(output4);

person1 = { name: "mitu", gender: "male", age: 32 };
person2 = "Mizan";
output4 = validProposal(person1, person2);
console.log(output4);

person1 = { name: "milon", gender: "male", age: 20 };
person2 = { name: "sumi", gender: "female", age: 25 };
output4 = validProposal(person1, person2);
console.log(output4);

person1 = { name: "shuvo", gender: "male", age: 20 };
person2 = { name: "joy", gender: "male", age: 25 } ;
output4 = validProposal(person1, person2);
console.log(output4);

person1 = { name: "toya", gender: "female", age: 20 };
person2 = { name: "kader", gender: "male", age: 25 }  ;
output4 = validProposal(person1, person2);
console.log(output4);

person1 = { name: "toya", gender: "female", age: 24 };
person2 = { name: "bjoy", gender: "male", age: 32 };
output4 = validProposal(person1, person2);
console.log(output4);


