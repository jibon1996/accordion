

const fags= document.querySelectorAll(".faq");

 fags.forEach((fag) => {
        fag.addEventListener("click", () =>{
            for(i = 0; i < fags.length ; i++){
                if(fags[i] != fag){
                    fags[i].classList.remove("active");
                }else{
                    fag.classList.toggle("active");
                }
            }
            
        });
    });
