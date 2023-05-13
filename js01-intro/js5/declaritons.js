// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")

//* Ornek1:
//*********************************** */

//! Declaration( Fonksiyonun tanimlanmasi)

function yazdirMerhaba(){
    // alert('Merhaba FS14')
    console.log('Merhaba FS14');
}


yazdirMerhaba() //! invoke, call
yazdirMerhaba() //! invoke, call


//* Ornek2:
//*********************************** */

function yazdirParametre(name){
    // alert('Merhaba FS14')
    console.log('Merhaba' ,name);
}

yazdirParametre('FS15')
yazdirParametre('FS16')

//* Parametre listesi (arguman listesi)
function yazdirParametre(message,name){
    // alert('Merhaba FS14')
    console.log(message ,name);
}

yazdirParametre('HEllon','FS15')
yazdirParametre('Ola','FS16')
yazdirParametre('velkommen','FS17')


// //! Parametre listesi (argüman listesi) hocadan
// function yazdirParametre(message, name = "Cohort14") {
//     console.log(message, name)
//   }
//   yazdirParametre("Hello", "FS15")
//   yazdirParametre("Salut", "FS16")
//   yazdirParametre("Hola", "FS17")
  
//   //! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//   //! yerine default parametre atayabiliriz. Ornekteki name
//   //! parametresi icin default değer olarak 'Cohort14' atanmistir.
  
//   yazdirParametre("Hallo")
//   yazdirParametre("Ehlen")


//* Ornek3:
//*********************************** */
console.log(new Date());  //! bu sistem tarihini ve saatini verir.
function calculate(name, yob){
    const age = new Date().getFullYear() - yob
    console.log(`${name} is ${age} years old.`);

}
calculate('Ahmet', 1990)
calculate('Ismet', 1890)


//* ORNEK3:
//******************************************/
console.log(new Date()) //? Sistem tarihi ve saatini verir.

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob
  // console.log(`${name} is ${age} years old`)
  return age
}

console.log(calculate("Ahmet", 1990))
const ismetAge = calculate("İsmet", 1890)
console.log("Ismet's Age:", ismetAge)

// //* ORNEK4:
// //******************************************/

// function add(num1, num2) {
//   const sum = num1 + num2
//   return sum
// }

// function addShort(num1, num2) {
//   return (num1 + num2) / (num1 * num2)
// }

// const result1 = add(3, 5)
// const result2 = add(5, 9)
// const result3 = addShort(5, 9)

// console.log(result1, result2)
// console.log(result3)

//* ORNEK5:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.
//? ana programda calistirmak icin return dondurduk.

function isEvenOrOdd(num){
    if(num % 2 === 0){
        return 'EVEN'
    }else{
        return 'ODD'
    }
}
   

const num = prompt('Please enter a number')
isEvenOrOdd(num)

console.log(`${num} is ${isEvenOrOdd(num)}`);

// //? Alternatif olarak
// function isEvenOrOdd(num) {
//     return num % 2 === 0 ? "EVEN" : "ODD"
//   }
  
//   const num = prompt("Please enter a number:")
//   console.log(`${num} is ${isEvenOrOdd(num)}`)


//   //? Alternatif olarak
// function isEvenOrOdd(num) {
//     let result
//     if (num % 2 === 0) {
//       result = "EVEN"
//     } else {
//       result = "ODD"
//     }
//     return result
//   }