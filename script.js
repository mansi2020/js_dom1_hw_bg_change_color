//add reandom color in background
let container = document.getElementById("container");
let clickbutton = document.getElementsByClassName("change-bg");

clickbutton[0].addEventListener("click",() => {
    const randomnum = Math.floor(Math.random()*16777215);

    //make random num into code
    const randomcode = '#' + randomnum.toString(16);
    container.style.backgroundColor = randomcode;

    setTimeout(tranformbutton0,100);
    clickbutton[0].style.transform = "scale(1.5)";
    function tranformbutton0(){
        clickbutton[0].style.transform = "scale(1)";
    } 
})

//add random image in background
let images = document.querySelectorAll(".hide");

let idx = 0;
clickbutton[1].addEventListener("click",()=>{
    idx++;
    images.forEach((item,idx)=>{
        images[idx].style.display = "none";
    });
    images[idx].style.display = "block";
    console.log(images[idx]);
    if(idx==images.length-1){
        idx = 0;
    }
    setTimeout(tranformbutton0,100);
    clickbutton[1].style.transform = "scale(1.5)";
    function tranformbutton0(){
        clickbutton[1].style.transform = "scale(1)";
    } 
})






