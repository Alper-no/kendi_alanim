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

//?-------------- ÖRNEK -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

const grades = [55, 77, 23, 89, 100, 44, 33]
const lessThan50 =[]
const equalOrBiggerThan50 =[]


for(let j=0 ; j<grades.length;j++){
    if(grades[j] < 50){
        lessThan50.push(grades[j])
    }else{
        equalOrBiggerThan50.push(grades[j])
    }
}