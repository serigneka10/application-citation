
let citations = [
    // citation 1
    "« Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble. »",
    // citation 2
     "« L’enfant qui n’est pas embrassé par le village le brûlera pour sentir sa chaleur. »",
    // citation 3
 "« Quand les racines d’un arbre commencent à pourrir, il répand la mort sur les branches. »",
    // citation 4
  "« Un seul doigt ne peut pas ramasser un caillou. »",
    // citation 5
  "« Le lion ne se retourne pas quand un petit chien aboie. »",
    // citation 6
  "« Même le meilleur danseur doit quitter la scène. »",
    // citation 7
  "« La sagesse est comme un baobab : une seule personne ne peut pas l’embrasser. »",
    // citation 8
  "« La sagesse est comme un baobab : une seule personne ne peut pas l’embrasser. »",
    // citation 9
  "« L’eau chaude n’oublie pas qu’elle a été froide. »",
    // citation 10
 "« Celui qui pose des questions ne se perd jamais. »", 
]


const bouton = document.getElementById("new-code");
const zoneCitation = document.getElementById("citations");

bouton.addEventListener("click", function() {

const index = Math.floor(Math.random() * citations.length);
zoneCitation.innerText = citations[index];
});

