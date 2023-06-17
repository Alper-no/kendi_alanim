const API_KEY = 'coinrankingecf87f13e633a469857390e70e998373de6b66adcaaf87d5';

const URL =`https://api.coinranking.com/v2/coins?api_key=${API_KEY}`;

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getCoin();
})


const getCoin = async () => {
    try{
        const reponse = await fetch(URL);
        const data =await reponse.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
};