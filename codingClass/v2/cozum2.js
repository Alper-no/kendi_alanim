// soru-1 1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları konsola yazdırınız ?

// let sayac = 0
// for (let i =1000; i < 2000; i++){
//     if(i % 13 == 3){
//         console.log(i);
//         sayac++
//     }
// }

// console.log(sayac);


// soru-2 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let sayac = 0
// let toplam = 0;

// while(sayac<5){
//     console.log("5 'rten kucuktur");
//     let sayi =prompt('Lutfen bir sayi giriniz')
// toplam +=sayi
//     sayac++
// }

// console.log(toplam /sayac);


// soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while) 
// let durum = true
// let sum =0
// while (durum) {
//     let sayi = prompt('Sayi giriniz')
//     if(sayi< 0){
//         durum = false
//         continue
//     }
//     sum +=sayi
// }

// console.log(sum);

// soru-4 sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.






// soru-5 Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)


// soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  // 0 1 1 2 3 5 8 13



// soru-7 Aşağıdaki çıktıyı konsola yazdırınız

// * * * * *
// * * * * * 
// * * * * *
// * * * * * 
// * * * * *
let stars = ''
for(let i = 0 ; i< 5;i++){
    for(let j = 0 ; j<5; j++){
        stars += '*'
    }
    stars += '\n'
    
}


// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ? 

// 0
// 00
// 000
// 0000
// 00000
// 000000