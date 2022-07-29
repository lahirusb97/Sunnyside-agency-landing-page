const navBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".path");
// navBtn.addEventListener("click",()=>navBtn.classList.toggle("show_navbar"));
navBtn.addEventListener("click",()=>{
    nav.classList.toggle("show_navbar")
});

//auto close nav bar 
const link = document.querySelectorAll(".top_nav li a");

link.forEach((element) => {
    element.addEventListener("click", (e) => {
nav.classList.remove("show_navbar");
    })
})
