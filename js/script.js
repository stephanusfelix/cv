let bg=document.getElementById("HomePic");
let hi=document.getElementById("HomeHi");
let textEdu=document.getElementById("AboutEducation");
let textExp=document.getElementById("AboutExperience");
let Abbox1 = document.getElementById("About1");
let Abbox2 = document.getElementById("About2");
let img1 = document.getElementById("StudentCouncilImg");
let img2 = document.getElementById("SionDancerImg");
let hover1 = document.getElementById("StudentCouncil");
let hover2 = document.getElementById("SionDancer");
var a = true;
var b = false;

document.addEventListener("DOMContentLoaded", function() {
  let start = Date.now();
      let Timer = setInterval(() => {
      let timePassed = Date.now() - start; 
      if (timePassed >= 1000) {
        clearInterval(Timer); // finish the animation after 2 seconds
        return;
      }
      MoveHi(timePassed); 

    }, 20);
});
function MoveHi(value){
  hi.style.transform = "translateX("+value/3.63+"px)"
}

document.addEventListener('scroll',function(){
    var value = window.scrollY;
    console.log(value)
    bg.style.transform = "translateY("+value*(-0.3)+"px)"
    if(window.scrollY<-190){

    }else{
      textEdu.style.transform = "translateY("+value*(0.2)+"px) rotate(90deg)"
      textExp.style.transform = " translateX("+value+"px)"
    }
})

function Click1(event){
  if(b){
  Abbox2.classList.add("hidden")
  Abbox1.classList.remove("hidden")
  b=!b;
  a=!a;
  }
  
}
function Click2(event){
  if(a){
  Abbox1.classList.add("hidden")
  Abbox2.classList.remove("hidden")
  a=!a;
  b=!b;
  }
  
}
hover1.onmouseover = function(){
  img1.style.display = "block";
}
hover1.onmouseout = function(){
  img1.style.display = "none";
}
hover2.onmouseover = function(){
  img2.style.display = "block";
}
hover2.onmouseout = function(){
  img2.style.display = "none";
}