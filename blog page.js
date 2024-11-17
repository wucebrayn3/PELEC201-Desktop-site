let menuCont = document.getElementById("menuCont");
        let isToggled = true;
        menuCont.addEventListener("click", ()=>{
            if(isToggled){
                menuCont.style.zIndex = "2"
                menuCont.style.height = "90vh"
                menuCont.style.width = "90vw"
                menuCont.style.marginBottom = "70px"
                isToggled = false;
            }
            else{
                menuCont.style.zIndex = ""
                menuCont.style.height = ""
                menuCont.style.width = ""
                menuCont.style.marginBottom = ""
                isToggled = true;
            }
        });

        let ratedBlogs = document.querySelectorAll(".rated");
        
        ratedBlogs.forEach(rb=>{
            rb.addEventListener("click", ()=>{
                rb.style.width = "90vw"
            })
        })