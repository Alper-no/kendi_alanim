// let text = prompt('text giriniz :')
// let result = text.split(' ')
// // console.log(result);
// // console.log(result[0]);
// let sonuc = ''
// for (let i= result.length; i > 0; i--){
//     sonuc += result[i-1]+ ' '
// }
// console.log(sonuc);



let text = prompt('text giriniz :')
let result = text.split('')
let sonuc = ''
for (let i= result.length; i > 0; i--){
    sonuc += result[i-1]
}
console.log(sonuc);