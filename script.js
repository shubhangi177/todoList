//select dom elements
const input = document.getElementById("todo-input")
const addButton = document.getElementById("add-btn")
const tasks = document.getElementById("todo-list")

//try to load saved todos from localStorage(if any)
const saved = localStorage
addButton.addEventListener('click', function(){
    let task = input.value
    input.value = ""
    
})