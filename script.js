



let citations = [
    " « Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble. » " ,
     " « L’enfant qui n’est pas embrassé par le village le brûlera pour sentir sa chaleur. »",
 " « Quand les racines d’un arbre commencent à pourrir, il répand la mort sur les branches. »",
  " « Un seul doigt ne peut pas ramasser un caillou. »",
  " « Le lion ne se retourne pas quand un petit chien aboie. »",
  "« Même le meilleur danseur doit quitter la scène. »",
  "  « La sagesse est comme un baobab : une seule personne ne peut pas l’embrasser. »",
  "   « La sagesse est comme un baobab : une seule personne ne peut pas l’embrasser. »",
  "  « L’eau chaude n’oublie pas qu’elle a été froide. »",
 "  « Celui qui pose des questions ne se perd jamais. »", 
]
const bouton = document.getElementById("new-citation");
const zoneCitation = document.getElementById("citations");

bouton.addEventListener("click", function() {

const index = Math.floor(Math.random() * citations.length);
zoneCitation.innerText = citations[index];
zoneCitation.style.backgroundColor = "rgb(66, 60, 147)";

  let randomColor = '#' + Math.floor(Math.random() * 16787215).toString(16);
document.body.style.backgroundColor = randomColor;
});
