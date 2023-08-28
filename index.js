

const fags= document.querySelectorAll(".faq");


fags.forEach((fag) => {
    fag.addEventListener("click", () =>{
        fag.classList.toggle("active");
    });
});