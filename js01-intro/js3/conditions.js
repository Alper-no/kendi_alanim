// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******")


const calismaSuresi = prompt ('Calisma Suresini :')
let maas = prompt (' Maasini griniz :')

if( calismaSuresi >=10){
   // maas = Math.trunc(maas * 1.1)
    maas = Math.round(maas * 1.1)
    console.log('Zamli maasiniz',maas);
    console.log(`Zamli maasiniz: ${maas}`)
}else {
    console.log('Uzgunuz maasiniza zam yok',maas);
}


console.log('Gule Gule');