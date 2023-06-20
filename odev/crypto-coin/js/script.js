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

  let obj = veri.data.coins.filter((element) => {
    return element.name === inputValue;
  });
  console.log(obj);

  const coins = document.querySelector(".coins");
  coins.innerHTML += `
    <figure class="coin">
          
          <figcaption class="coin-name">
            <p class="coin-temp">${obj[0].name}</p>
            <sup></sup>
          </figcaption>
          <img class="coin-icon" src="" alt="">
    </figure>
        `;
};
