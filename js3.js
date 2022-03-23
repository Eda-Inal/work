let idea1 = document.querySelector("#idea")
let idea2 = document.querySelector("#idea2")
idea2.innerHTML = "BANA TIKLA"
idea1.addEventListener("click", idea1DOM)
idea2.addEventListener("click", idea2DOM)
function idea1DOM() { 
    alert("tıklandı")
}
function idea2DOM(){
    idea2.innerHTML == "BANA TIKLA" ? idea2.innerHTML = "bana tıklandı" :  idea2.innerHTML = "BANA TIKLA"
}



// function idea2DOM() {
//     if(idea2.innerHTML == "BANA TIKLA"){
//          idea2.innerHTML = "bana tıklandı"
//     }
//    else{
//        idea2.innerHTML = "BANA TIKLA"
//    }
// }
