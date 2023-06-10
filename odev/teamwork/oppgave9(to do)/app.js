
//selector
const input = document.getElementById("input");
const ekle = document.getElementById("ekle");
const toDoList = document.getElementById("toDoList");
const dateSpan = document.getElementById('span')
ekle.addEventListener("click", () => {
  toDoList.innerHTML += `
  <div>
    <input  class="border-3 rounded-2 p-1 input" type="text" value=${input.value}>
    <button class="btn btn-success">Edit</button>
    <button class="btn btn-danger">Delete</button>
    </div>`;
  input.value = "";
  input.focus();
});
toDoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentElement.remove();
  }
  if (e.target.parentElement.classList.contains("edit")) {
    e.target.parentElement.classList.remove("edit");
  } else {
    e.target.parentElement.classList.add("edit");
  }
});

let date = new Date().getDay()



const newDate= () =>{
    const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    dateSpan.textContent = `${day[date]}`
}
window.addEventListener("load",()=>{
    newDate()
})
