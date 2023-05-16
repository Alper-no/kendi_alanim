// ? ======================================
// ?              SCOPE
// ? ======================================
console.log("******* SCOPE ********")

let number1 = 3
console.log(number1); //3

const funk1 = () => {
    number1= 44
} 
funk1()
console.log(number1);