var nombre_aleatoire = 0;
var nb_tentatives_Max = 6;
var nb_tentative = 0;
var nb_du_Joueur;

var bouton = document.getElementById("valider");

function init() {
    nb_tentative = 0;
    nombre_aleatoire = Math.floor(Math.random() * 100) + 1;
    console.log(nombre_aleatoire);
    bouton.addEventListener("click", myFunction);
    bouton.textContent = "Essayer";
}

function myFunction() {
    nb_tentative++;
    nb_du_Joueur = document.getElementById("input").value;
    if (nb_tentative == nb_tentatives_Max) {
        document.getElementById("message").innerHTML = `[${nb_tentative}] C'est perdu ! Le Nombre mystère était [${nombre_aleatoire}]`;
        document.getElementById("message").style.color = "red";
        rejouer();
    }
    else if (nb_du_Joueur < nombre_aleatoire) {
        document.getElementById("message").innerHTML = `[${nb_tentative}] C'est plus`;
        document.getElementById("message").style.color = "blue";
    } else if (nb_du_Joueur > nombre_aleatoire) {
        document.getElementById('message').innerHTML = `[${nb_tentative}] C'est moins`;
        document.getElementById("message").style.color = "blue";
    }
    else if (nb_du_Joueur == nombre_aleatoire) {
        document.getElementById("message").innerHTML = `[${nb_tentative}] C'est gagné ! Le Nombre mystère est bien [${nombre_aleatoire}]`;
        document.getElementById("message").style.color = "green";
        rejouer();
    }

}

function rejouer(){
    bouton.textContent = "Rejouer ?";
    bouton.removeEventListener("click", myFunction)
    bouton.addEventListener("click", function reset(){
        document.getElementById("message").innerHTML = "";
        document.getElementById("input").value = "";
        bouton.removeEventListener("click", reset);
        init();
    })
    
}

document.getElementById("message").style.color = "black";