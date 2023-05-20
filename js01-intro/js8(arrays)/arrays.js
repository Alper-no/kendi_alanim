console.log('Hello World')
//array olusurma metodlari
const arr =['a',25,false]

const dizi = new Array(100,'cw', true)
console.log(dizi);

const dizi2 =  new Array(10)//boyle yazinca 10 tane bos array olusturur)
console.log(dizi2);

// const colors = ['Red','Green','Blue']

// console.log(colors[0])
// console.log(colors[colors.length - 1]) //son elaman
// console.log(colors[colors.length - 2]) //sondan ikinciye ulaşım.
// console.log(colors[-1]) //undefined
// console.log(colors[56]) //undefined


//Array is Array
// const colors = ['Red','Green','Blue'];
// console.log(typeof colors);

// console.log(Array.isArray(colors)) //true 
// console.log(colors instanceof Array) //true 


// const variables = '1';
// console.log(Array.isArray(variables)) //false 
// console.log(variables instanceof Array) //false 


//Strings immutable değiştirilemez
// let str = 'Brown';
// console.log(str[0])
// str[0]='b';
// console.log(str)

// str = 'brown'

//Arrayle mutable yani değiştirilebilir
// const colors = ['Red','Green','Blue'];

// colors[1] = 'yellow' //mevcudu değiştirir

// console.log(colors)


// //ekleme yapar
// colors[3]= 5

// console.log(colors)

// let c = 'Pink'

// colors[4] = c

// console.log(colors)

//!Ekleme 
// const colors = ['Red','Green','Blue'];

// colors[6] = 2
// console.log(colors);
// console.log(color.length);//7 cunku bos elemanlari da sayar.
// console.log(colors[3]);// bos ifadeyi alir.

//primitiveler
/* let a = 5;
let b = a;
console.log(a)
console.log(b)

a= 6;
console.log(b)

b=a
console.log(b) */

//non-primitiveler

/* let arr1 = [1,2,'Three',false];

const arr2 = arr1;

// console.log(arr1)
// console.log(arr2)

// arr1[0]=0

// console.log(arr1)
// console.log(arr2)

const c = ['2'];
console.log(c)

console.log(Boolean(c))

const d = ['2']
console.log(c == d) //false çünkü adresleri farklı

console.log(arr1 == arr2) // true çünkü adresler aynı

 arr1 = ['four'] //let ile tanımlandığı için onaylanır

 arr2 = ['four'] // const ile tanımlandığı için onay verilmez */



 //Array metodları

//  const colors = ['Red','Green', 'Blue','Yellow','Brown'];

/* const cls = colors.slice() // orjinal array in içeriğini kopyalar

console.log(colors)
console.log(cls)

colors[0] = 'Black'

console.log(colors)
console.log(cls) */

// console.log(colors.slice(2,4)) //Blue yellow
// console.log(colors.slice(-2)) //yellow Brown
// console.log(colors.slice(2)) // ['Blue', 'Yellow', 'Brown']
// console.log(colors.slice(8)) // [] limit dışı
// console.log(colors.slice(-2,1)) // [] hatalı indexleme
// console.log(colors.slice(-3,-1)) // ['Blue', 'Yellow']


//Push ()

// const colors = ['Red','Green'];
// console.log(colors.length)

// let c = 'White';

// // const d = colors.push('Blue',2023,c)

// console.log(colors.push('Blue',2023,c))
// // colors.push(2023)

// // console.log(colors.length)
// // console.log(d + ' d')


// const car = ['Audi', 'BMW']

// const car2 = ['Ford', 'Tesla', 'Mercedes']

// car.push(car2) //['Audi', 'BMW', ['Ford', 'Tesla','Mercedes']] array in tamamını tek bir eleman olarak gönderir
// car.push(...car2) //['Audi', 'BMW', 'Ford', 'Tesla','Mercedes'] diğer arrayin her elemanını ayrı ayrı dahil eder.

// console.log(car[2][2]) //Mercedes çıkar