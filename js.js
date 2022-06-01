//creator of items
const listItem = document.querySelector(".list_item")
function createItem(text, isDone, i) {
    let e = listItem.cloneNode(true)
    e.querySelector(".list-text").innerHTML = text
    e.removeAttribute("style")
    e.querySelector(".innercheckbox").checked = isDone
    e.querySelector(".innercheckbox").addEventListener("click",()=>{
        checkedTask(i)
    })
    e.querySelector(".delete").addEventListener('click', ()=>{
        deleteTask(i)
    })
    document.querySelector(".list").appendChild(e)
}
//button handlers
function deleteTask(index) {
    tasks.splice(index, 1)
    saveToLS()
    render()
}
function checkedTask(index) {
    let s = tasks[index].isDone
    if (s == true){
        tasks[index].isDone = false
    }else if(s == false){
        tasks[index].isDone = true
    }
    saveToLS()
    render()
}

//renderer
function render(){
    const toDelete = document.querySelectorAll(".list_item")
    toDelete.forEach((el) => {
        el.remove()
    })
    tasks.forEach((el, i) => {
        createItem(el.text, el.isDone, i)
    })
}
//form handler//
function formHandler(event){
    event.preventDefault()
    console.log(event)
    let text = event.srcElement[0].value
    tasks.push({text: text, isDone: false})
    saveToLS()
    render()
}
document.querySelector("form").addEventListener("submit",formHandler)
//local storage handlers//
function saveToLS(){
    let data = JSON.stringify(tasks)
    localStorage.setItem("tasks", data)
}
function loadFromLS(){
    let data = JSON.parse(localStorage.getItem("tasks"))
    if (data !== null){
        tasks = data
        return
    }
    tasks = []
}
//init
loadFromLS()
render()