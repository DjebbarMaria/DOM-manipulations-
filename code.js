//quotesDB est un tableau d'objets qui conteient touts les quotes avec leur auteurs
let quotesDB = [
  {
    parole: " it is never too late to be what you might have been",
    auteur: "George Eliot ",
  },

  {
    parole: "Be there for others, but never leave your self behind",
    auteur: "Dodinsky",
  },
  {
    parole:
      "you are a fighter.Look at everything you have overcome .Don't give up now",
    auteur: "Olivia Benson",
  },
  {
    parole:
      "Life is like riding a bicycle.To keep your balance,you must keep moving",
    auteur: "Albert Einstein",
  },
  {
    parole: "Life is what Happens when you are busy making other plans",
    auteur: "John lennon",
  },
  {
    parole: "Difficult Roads lead to beautiful destinations",
    auteur: "unknown",
  },
  {
    parole:
      "Happiness is not something readymade,it comes from your own actions",
    auteur: "DALAI LAMA",
  },
  {
    parole: "it always seems impossible until it's done",
    auteur: "Nelson Mandela",
  },
  {
    parole: "Happiness is not by chance ,but by choice",
    auteur: "Jim Rohn",
  },
  {
    parole: "it's just a bad day not a bad life",
    auteur: "unknown",
  },
  {
    parole:
      "each a problem that i solved became a rule ,which served afterwards to solve other problems",
    auteur: "Rene Descartes",
  },
  {
    parole:
      "you can't go back and change the begining,but you can start where you are and change the ending",
    auteur: "C.S Lewis",
  },
  {
    parole: "Dream big,stay positive,work hard,and enjoy the journey",
    auteur: "Urijah Faber",
  },
  {
    parole: "I never dream of success.I worked for it",
    auteur: "Estee Lauder",
  },
  {
    parole: "A person who never made a mistake never tried anything new",
    auteur: "Albert Einstein",
  },
];
//c'est la fonction qui fait le choix aléatoire de l'une des quotes biensure à l'aide de la fonction mathématiques prédifinie dans java random
function Randomquotes() {
  var randomq = quotesDB[Math.floor(Math.random() * quotesDB.length)];
  return randomq;
}

//là dans ces fonctions on peut voir bien la manipulation du DOM
function displayquotes() {
  dayquote = Randomquotes(); // on la laisse une variable globale car on a besoin de l'utiliser dans la fonction addtofavorite
  document.getElementById("q1").textContent = dayquote.parole; //on récupére par id la parole et l'auteur on les affiches dans div1
  document.getElementById("a1").textContent = dayquote.auteur;
}

function addtofavorite(favori) {
  //le paramétre favori sera remplacé par le id de div de favoris (elle nous aide pour savoir ou on doit mettre exactement notre contenu )
  const p = document.createElement("p");
  p.innerText = dayquote.parole;
  const a = document.createElement("h6");
  a.innerText = dayquote.auteur;
  favori.appendChild(p); // ces deux instruction pour que l quote choisi en favoris sera mise dans le div de favoris
  favori.appendChild(a);
}
