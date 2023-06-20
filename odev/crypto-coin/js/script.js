const API_KEY = "coinrankingecf87f13e633a469857390e70e998373de6b66adcaaf87d5";

const URL = `https://api.coinranking.com/v2/coins?api_key=${API_KEY}`;

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoin();
});

const getCoin = async () => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Bulunmadi");
    }
    const data = await res.json();
    domaYaz(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const domaYaz = (veri) => {
  const inputValue = document.getElementById("input").value;
  //   console.log(veri.data.coins);
  let obj = veri.data.coins.filter((element) => {
    return (
      element.name.toLowerCase().trim() === inputValue.toLowerCase().trim() ||
      element.symbol.toLowerCase().trim() === inputValue.toLowerCase().trim()
    );

    if(obj.length){
        
    }


  });
  // console.log(veri.data.coins);
  console.log(obj);
  table(obj[0]);
};
const table = (obj) => {
  const coins = document.querySelector(".coins");
  coins.innerHTML += `
    <figure class="coin">
    <figcaption class="coin-name"> 
        <p class="coin-temp">${obj.name}
        <sup>${obj.symbol}</sup></p>
        </figcaption>
        <p>${obj.price} </p>
      <img class="coin-icon" src=${obj.iconUrl} alt="">
      <p> </p>
    </figure>
    `;
};
// console.log(veri.data.coins[0].name); //? ana datadan icindeki dataya ulastik.Oradan da coins in icine ulastik.
//? alternative line
// async function getCoin() {
// }
