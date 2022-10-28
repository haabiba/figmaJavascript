const button= document.querySelectorAll("#myImage");
const count = document.querySelector("clicks");

const imgs= document.getElementsByClassName('btn')
const timag=imgs.length
var PanierAchat = [];
let p1 = document.createElement('div');
let clicks=0;

function addToCart(item) {
   
console.log(item.parentNode.parentNode.firstElementChild.firstElementChild.textContent)

    const product = {
        id: 'item.id',
        title: 'item.parentNode.parentNode.firstElementChild.firstElementChild.textContent',
        img:'item.getAttribute("src")',
        price: 'item.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.textContent'
    }
    PanierAchat.push(product)
    PanierAchat.length
}
const crntActiveImgC = function (imgContainer) {
	imgContainer = document.getElementsByClassName('btn');


	for (let i = 0; i < imgContainer.length; i++) {
	





	}
};

// listen to the click ( and be sure to know which node was clicked)
// push clicked product in a basket 
//esm, id, prix, desc, 
//basket.length 



