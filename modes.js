let mode = "light"
const el = document.createElement("link")
el.setAttribute("rel", "stylesheet")
el.setAttribute("href", "./css/dark.css")

function light(){
    document.querySelector("head").appendChild(el)
    console.log("sd")
}
function dark(){
    el.remove()
    console.log("sd")
}
document.querySelector(".ic").addEventListener('click', ()=>{
    if (mode == "light"){
        console.error("Dark mode")
        dark()
    }else if (mode =="dark"){
        console.error("Light mode")
        light()
    }
})
console.log(document.querySelector(".ic"))