//* Javascript Kodu */
// console.log('Locakde blunan script calisti')



// alert('bu bir alert dir')  /*Alert uygulamayi bloklar (blocking Code)(confirm ve alert komutu)*/
// karar=confirm('Emin misini E/H')

// console.log(karar)

// console.warn('Bu bir uyaridir')

// console.error('Eyvah hata olustu..')


//* CONS ve LET, Ecmascirt6 ile gelmistir. VAR eski versiyonlardan beri bulunmaktadir.


//? ---------- CONST----------------


console.log('App Js Running')

const pi = 3.14
console.log(pi)
console.log(typeof pi)

const sayi1= '3'
console.log(typeof sayi1);


//! caught SyntaxError : Missing initializer in const declarition.
// const deneme  //? const ile tanimlanan degiskene baslangic degeri verilmelidir.
// console.log(deneme) 


//* Uncaught TypeError: Assigment to canstant variable.
// const number1=5
// number1= 7  //! const ile tanimlanan degiskene sonradan atama yapilamaz.

const varMi = true
const isOpen = false
console.log(isOpen,typeof isOpen)

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.


let language = 'Java'
console.log(language,typeof language);

language = 'Javascript'
console.log(language)

language = true
console.log(language)

language = 3.14
console.log(language)

let adet  // ! JS bir degiskenin tutunu atanan degere gore belirler. Eger atama olmadiysa turu undefined olarak belirlenmis olur.
console.log(adet) //undefined (tanimsiz demek) cunku deger vermedik.

adet = '23' //? bu bir atama islemidir.
console.log(typeof adet)


{

    // Bir blok icerisinde degisken olusturduk
    let localDegisken = 5
    localDegisken = localDegisken +1
    console.log(localDegisken);
}


//! Uncaught ReferenceError: localDegisken is not defined.
console.log(localDegisken);