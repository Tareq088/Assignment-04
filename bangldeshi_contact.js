function  validContact( contact ) {
    let elevevDigit = /^\d{11}$/.test(contact);
    // console.log(elevevDigit)
    // console.log(contact[0])
    // console.log(contact[1])
    // console.log(!contact.includes(" "))
    // console.log(typeof(contact))
    if(typeof(contact) !== "string"){
        return "Invalid";
    }
    else if(elevevDigit && contact[0] == 0 && contact[1] == 1 && !contact.includes(" ")){
        // console.log("true")
        return true;
    }
    return false;
}

let contact = "01819234567";
let output1 = validContact(contact);
console.log(output1);

contact = "0181923 4567";
output1 = validContact(contact);
console.log(output1);

contact = "018192345679";
output1 = validContact(contact);
console.log(output1);

contact = ["01987654321"];
output1 = validContact(contact);
console.log(output1);

contact = "01345678900";
output1 = validContact(contact);
console.log(output1);

contact = "02145678900";
output1 = validContact(contact);
console.log(output1);

contact = true;
output1 = validContact(contact);
console.log(output1);