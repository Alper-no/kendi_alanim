//*Selectors****
const textArea = document.querySelector("#textarea");
const button = document.querySelector("#btn")

let par = document.createElement("p");


button.addEventListener("click",()=>{
    const text = document.createTextNode(textArea.value);
    par.appendChild(text);
    button.after(par)
    par.style.border="3px solid black"

    const arrayText = textArea.value.split(" ")
   

    let a = "";
    for(let i=0; i< arrayText.length;i++){
        a += arrayText[i][0].toLocaleUpperCase()+arrayText[i].slice(1)+ " "
    }
    par.textContent = a
    console.log(a);

    
})