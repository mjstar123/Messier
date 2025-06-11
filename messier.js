const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");
 
for(let el of items){     
    el.addEventListener("click", e=>{       
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let pic = e.currentTarget.querySelector("img").getAttribute("src")
        let alt1 = e.currentTarget.querySelector("img").getAttribute("alt")
        
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("figure img").setAttribute("src",pic);
        aside.querySelector("figure img").setAttribute("alt",alt1);
        aside.classList.add("on");
    });
 
    close.addEventListener("click", ()=>{
        aside.classList.remove("on");
    });
}        

