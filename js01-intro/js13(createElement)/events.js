document.querySelector('header h1').onmouseover = function (){
    document.querySelector('header h1').style.color= "red"
}
//? Alternatif olarak usttekine
const heading1 = document.querySelector('header h1')

heading1.onmouseover = function(){ //uzerine geldiginde
    heading1.style.color = "red"
}

heading1.onmouseout = function(){ //uzerinden ciktiginda
    heading1.style.color = "black"
}


const printHello = () => {
    document.write("Hello")
}


//? onload event i html ve css kodlarinii render edilmesi akabinde calsir.
window.onload = printHello()

printHello()

// her yenilenme isleminde input alanina focuslaniyor
window.addEventListener("load", () => {
    document.getElementById("input").focus()
})



const addBtn = document.querySelector("#btn")
const ul = document.createElement("ul")
document.querySelector(".item-list").before(ul)

addBtn.addEventListener("click", (){
    console.log('Btn Clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);


const input = document.querySelector("#input")



})