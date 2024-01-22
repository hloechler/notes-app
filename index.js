const addBtn = document.querySelector("button");
const notecard = document.querySelector(".notecard")
let notes = document.querySelectorAll(".input-box")

function showNotes(){
    notecard.innerHTML = localStorage.getItem('notes');
}
showNotes();

addBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notecard.appendChild(inputBox).appendChild(img);
})

function updateStorage(){
    localStorage.setItem("notes", notecard.innerHTML);
}

notecard.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

