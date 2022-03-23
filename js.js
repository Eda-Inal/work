let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)
function domClick(){
    console.log("tıklandı")
    this.style.color == "blue" ?  this.style.color = "black" :  this.style.color = "blue"
    
    
}