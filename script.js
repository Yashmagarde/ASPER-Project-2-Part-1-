const modal = document.querySelector(".modal")
const loginBtn = document.querySelector(".login-btn")
const closeBtn = document.querySelector(".close")

loginBtn.addEventListener("click", function(){
    modal.style.display  = "block"
})


closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})


window.addEventListener("click", function(e){

    if (e.target == modal ){
        modal.style.display = "none"
        
    }

    console.log(e.target)
})
