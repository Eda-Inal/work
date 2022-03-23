let counter = 0
let counterDOM = document.querySelector("#counter")
let incDOM = document.querySelector("#inc")
let decDOM = document.querySelector("#dec")
counterDOM.innerHTML = counter

incDOM.addEventListener("click", clickEvent)
decDOM.addEventListener("click", clickEvent)

function clickEvent(){
    this.id == "inc" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}


// function clickEvent(){
//     if(this.id == "inc"){
//         counterDOM.innerHTML = counter += 1 
//     }
//     else{
//         counterDOM.innerHTML = counter -= 1
//     }
// }
