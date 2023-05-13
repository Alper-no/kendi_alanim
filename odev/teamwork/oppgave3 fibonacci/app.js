// let ilkSayi = 1;
// let ikiciSayi = 1;

// let fibonacci =0

// for(let i= 0; i < 15; i++){
    
//     ilkSayi = ikiciSayi
//     ikiciSayi= fibonacci
//     fibonacci = ilkSayi + ikiciSayi;
//     console.log(fibonacci);
// }


do {
    let ilkSayi = 0;
    let ikinciSayi = 1;
    let fibonacci = 0;
    let sayi = prompt("Lutfen bir pozitif sayi giriniz:");
    if (sayi <= 0) {
      alert("Girdiginiz sayi sifirdan buyuk olmali.");
    } else {
      for (let i = 0; i < sayi; i++) {
        ilkSayi = ikinciSayi;
        ikinciSayi = fibonacci;
        fibonacci = ilkSayi + ikinciSayi;
      }
      console.log(fibonacci);
    }
    var kontrol = prompt("Devam etmek istiyor musunuz? (E  H)");
  } while (kontrol == "E" || kontrol == "e");