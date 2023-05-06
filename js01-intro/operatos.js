console.log("Js dosyası bağlandı.");

//! Operators//


var deneme= 5;
varDeneme= 6;

const myVar1= 6;
let myVar2= 6 ;
//+ Aritmetiksel Operatorøer

// +,-,*,/,%,**

const num1= 10;
const num2= 69;

const toplam = num1 + num2 // num ve num2 operand olarak adlandiriliyor
// '+' ise operator olarak adlandiriliyor.
console.log(toplam);

const msg1= 'Hello'
const msg2= ' World!'

const message = msg1 + msg2

console.log(message);


const firstName = 'Koray'
const lastName = ' Koksal'

const fullName = firstName +''+ lastName
// '+' operatoru String Concatenation islemini yapar.
console.log(fullName);

//! Template Literals (Es6 ile gelen bir özellik)
// `merhaba``${değişken} ${değişken2}`;
// `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = '6'
const num4 ='7'
console.log(num3+num4);
console.log(num3 + 7); // js de otomatik tip donusumu yaparak ifadeyi de concatenad etti.

console.log(7+num3);// + operatorunde string degisken ustun gelir ve donusumu stringe yapar.76 ciktisini verdi.

console.log(typeof (7 + num3));


//! '-' Operatoru

const x = 55
const y = 44

console.log(x-y);

const myNum = '1'
console.log(x - myNum); 

const yourNum = 'one'
console.log(x- yourNum); // NaN (Not a Number)

//? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.


//! * operatoru

let carp1 = 7; 
let carp2 = 9;
console.log(carp1*carp2);

console.log('a' * 'b');
console.log('a'* 3); //NaN

console.log('5' * '9'); // 45. karakterler numaric is number gibi davranakara islemi gerceklestiriyor.

console.log(typeof('5' * '9'));