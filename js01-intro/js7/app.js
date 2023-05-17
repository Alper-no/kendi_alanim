// let str1 = "This is a string"
// let str2 = 'This is a string'
// let str3 = `This is a string`
// let str4 = new String("This is a string")

// // console.log(typeof str1) // string
// // console.log(typeof str2) // string
// console.log( str3) // string
// console.log( str4) // object

// console.log(str3[0])

// const str = 'Hello World';

// console.log(str.length)
// console.log(str[6])
// console.log(str[11])

// for (let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

//tersten itere
// for(let i = str.length -1   ; i>=0; i--){
//     console.log(str[i])
//   }


// for(let i = str.length ; i>0; i--){
//     console.log(str[i-1])
//   }

// let str1 = 'I\'m a string'
// let str2 = "I'm a\0string\""
// console.log(str2)


// alert('1- ders \n2-Kayıt\n 3-pre-class')
// alert(`1- ders 
// 2-Kayıt 
// 3-pre-class`)


//slice

// let str1 = "Clarusway";
// let str2 = str1.slice(-3);
// console.log(str1)
// console.log(str2)
// console.log(str1.slice(-9,-3))

//substring
// let str= "Orange";
// console.log(str.substring(0,4))
// console.log(str.substring(4,0))
// console.log(str.substring(2)) // 2 den başla sona kadar git
// console.log(str.substring(str.length - 4)) //son 4 karakteri getir
// console.log(str.substring( - 4)) //çalışmaz

// console.log(str)

// let str2 = str.substring(0,4);
// console.log(str2)



//concat

// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "Stack";
// const result = str1.concat(" ", str2, " ", str3)
// console.log(result)
// console.log(str3)

// let greet = 'Hello'

// console.log(greet.concat(' World'))
// console.log('Hello'.concat(' World'))


// let isim = prompt('İsminiz nedir?')


// console.log('Merhaba '.concat(isim))

// console.log('Merhaba ' + isim)



//includes

// let str1 = "Clarusway";

// console.log(str1.includes('l'))
// console.log(str1.includes('l',1)) //1.indexten aramaya başla
// console.log(str1.includes('l',2)) //2. indexten aramaya başla

//indexof
// let str1 = "Clarusway";

// console.log(str1.indexOf('a')) //2
// console.log(str1.indexOf('a',3)) //7
// console.log(str1.indexOf('l',3)) // -1 İçerisinde bulunamadı


//örnek

// let email=prompt("email giriniz")
// console.log(email.includes("@"));

// let email = prompt("Enter your email")

// if (email.indexOf("@") === -1) {
//   console.log("Invalid email")
// } else{
//     console.log('Valid email')
// }

// function findCount(source, search) {
//     let count = 0; // counter will start from 0
//     let position = source.indexOf(search) // first search
  
//     while (position !== -1) {// as long as we find search string, loop will go on 
//       count++ // increase the counter
//       position = source.indexOf(search, ++position) // search again, from where we stop +1
//     }
//     return count
//   }
    
//   let str = 'You do not know what you do not know until you know.';
//   console.log (findCount(str, "know")); // 3


//lastIndexof

// let str = "Hello John, welcome to Clarusway.";

// console.log(str.lastIndexOf("o")); // 21

// console.log(str.lastIndexOf("o", 6));// 4
// console.log(str.lastIndexOf("O", 6));// -1

// console.log(str.indexOf("o"));// 4

