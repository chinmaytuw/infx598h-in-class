function onClickMe() {
   // alert("You Clicked me");
   //this.textContent="You Clicked Me";
   var p=document.querySelector(".hide-show-text");
   if (p.style.display !="none") {
       p.style.display="none";
   }
   else{
       p.style.display="block";
   }
   
}

var btnClickMe = document.querySelector(".btn-click-me");
btnClickMe.addEventListener("click",onClickMe);