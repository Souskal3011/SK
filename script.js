// INTERACTIEVE KLOK ORB
let orb=document.getElementById("timeOrb");
let info=document.getElementById("timeInfo");
let idleTimer;

function updateTime(){
 let now=new Date();
 orb.innerText=now.toLocaleTimeString();
}
setInterval(updateTime,1000);
updateTime();

document.addEventListener("mousemove",(e)=>{
 orb.style.left=e.clientX+15+"px";
 orb.style.top=e.clientY+15+"px";
 orb.style.opacity="1";
 clearTimeout(idleTimer);
 idleTimer=setTimeout(()=>orb.style.opacity="0.3",2000);
});

orb.addEventListener("click",()=>{
 let now=new Date();
 info.innerText=now.toDateString();
 info.style.opacity="1";
 setTimeout(()=>info.style.opacity="0",4000);
});