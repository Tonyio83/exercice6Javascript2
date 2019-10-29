let change = function() {//crée la fonction pour changer l'image avec le curseur
 this.src = 'assets/img/' + this.id + '_2.jpg';//récupère l'image changé
}
let changeBack = function() {//crée la fonction pour récupérer l'image d'origine
  this.src = 'assets/img/' + this.id + '.jpg';
}
document.getElementById('image1').onmouseover = change;
document.getElementById('image2').onmouseover = change;
document.getElementById('image3').onmouseover = change;
document.getElementById('image4').onmouseover = change;
document.getElementById('image5').onmouseover = change;

document.getElementById('image1').onmouseout = changeBack;
document.getElementById('image2').onmouseout = changeBack;
document.getElementById('image3').onmouseout = changeBack;
document.getElementById('image4').onmouseout = changeBack;
document.getElementById('image5').onmouseout = changeBack;
