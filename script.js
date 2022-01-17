'use stricts';

var anchors = document.getElementsByTagName('a');
var burger = document.getElementById('burger');




// burger.addEventListener("click", function(){
//     for(var x of anchors){
//         x.classList.toggle("block");
//     }
//     this.classList.toggle("rotateZ");
// });

burger.addEventListener('click', function(){
    for(var x of anchors) {
    x.style.display = ('block');
    }
    this.classList.toggle('rotateZ');
} );
