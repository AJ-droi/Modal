const btn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const close = document.querySelector(".close-btn");

btn.addEventListener("click", function(){
    overlay.classList.add("open-modal")
})

close.addEventListener("click", function(){
    overlay.classList.remove("open-modal")
})