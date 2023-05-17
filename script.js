const mousecircle = document.querySelector('.mouse-circle');
const mousedot = document.querySelector('.mouse-dot');
 
// mouse circle 
const mousecirclefn =(x,y)=>{
mousecircle.style.cssText= ` top: ${y}px;
 left: ${x}px;
  opacity:1 ;`;
mousedot.style.cssText= ` top: ${y}px;
 left: ${x}px;
  opacity:1 ; `;


};
// end of mouse
document.body.addEventListener("mousemove",(e)=>{
//console.log(e);
  // console.log("hi");
    // let x =e.clientX;
    let x= e.clientX;
    let y= e.clientY;
    

 mousecirclefn(x,y);
 animatedcircle(e,x,y);
});
document.body.addEventListener("mouseleave",e=>{
    mousecircle.style.opacity='0';
    mousedot.style.opacity='0';
 });

//  animated the circle
const circle = document.querySelectorAll('.circle');
const mainimg=document.querySelector('.main-circle img');
//const circle1=document.querySelector('.circle-1');
//const circle2=document.querySelector('.circle-2');
//const circle3=document.querySelector('.circle-3');
//const circle4=document.querySelector('.circle-4');
 

 let mx=0;
 let my = 0;
const z= 100;
const animatedcircle = (e,x,y) =>{

  if (x<mx){
  circle.forEach((circle) =>{
     circle.style.left=`-${z}px`;
  });
    mainimg.style.left=`-${z}px`;
  }

  else if(x>mx){
    circle.forEach((circle) =>{
      circle.style.left= `${z}px`;
     });
     mainimg.style.left=`${z}px`;
  }
else if(y>my) 
{
  circle.forEach((circle) =>{
    circle.style.top=`${z}px`;
   });
   mainimg.style.top=`${z}px`;
 }
  else if(y<my){
    circle.forEach((circle) =>{
      circle.style.top= `-${z}px`;
     });
     mainimg.style.top=`-${z}px`;
  }
  mx = e.clientX;
 my = e.clientY;
  
};

// end of animated the circle

// main-btn

let ripple;


// inisde themain-btn create div tag shoe=w actualmarking of muse inside the main-btn
 const mainbtn = document.querySelector('.main-btn');
  mainbtn.addEventListener("mouseenter",(e)=>{
   const left=e.clientX-e.target.getBoundingClientRect().left;
   const top =e.clientY-e.target.getBoundingClientRect().top;
   ripple= document.createElement('div');
   ripple.classList.add('ripple');
   ripple.style.left=`${left}px`;
   ripple.style.top=`${top}px`;
   mainbtn.prepend(ripple);
  });
   mainbtn.addEventListener('mouseleave',()=>{
    mainbtn.removeChild(ripple);
   })
// end of main-btn