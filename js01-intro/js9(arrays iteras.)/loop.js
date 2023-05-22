//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******")

const grades = [55, 77, 23, 89, 100, 44, 33]
let sum = 0
for(let i = 0 ; i< grades.length; i++){
    sum +=grades[i]
}
console.log('AVG:' ,Math.round(sum / grades.length));
console.log('AVG:' ,(sum / grades.length).toFixed(2)); // virgulden sonra ikki basamak alir.