const images= document.querySelectorAll("#myImage");
const Count = document.querySelector("#clicks");
const callToActionBtns = document.querySelectorAll(".btn");
const imgs= document.getElementsByClassName('btn')
const timag=imgs.length

let clicks=0;

timag.forEach((button) => { 
button.addEventListener('click', (e) => {
    if  (timag.classList.toggle("active")) 
     {
       button.src="img/panierrougr.png";
       Count.innerHTML = clicks++;

    }
         else {   
            button.src="img/icon_cart-card.svg"
            Count.innerHTML = clicks--;
        }
   
});
});



