let addToDo=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToDo.addEventListener('click', ()=>{
    let element = document.createElement('p');
    element.classList.add('paragraph-styling');
    element.innerText=inputField.value
    toDoContainer.appendChild(element);
    inputField.value="";
    element.addEventListener('click',()=>{
        element.style.textDecoration="line-through";
    })

})