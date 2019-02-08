window.onload = () => {

    let multiObjet = {
        prix: 50,
        nombre: 0,
        multiplicateur: 1,
        augmenterMultiplicateur(){
            ++this.multiplicateur;
            ++this.nombre;
        },
        calprix(){
                this.prix = this.prix * 2;
        }

    }

    let score = 0;
    let multiplicateur = 1;
    let button = document.getElementById("clic");
    let affichage = document.getElementById("affichage");
    let multibutton = document.getElementById("multiplier");
    let prixaffichage = document.getElementsByClassName("prix")[0];
    let compteur = document.getElementsByClassName("compteur")[0];


    function click(multiplicateur) {
        for (var i= 1; i <= multiplicateur; i++) {
            score++;
        }
        affichage.innerText = score;
    }


    function game() {
        let multiplicator = multiObjet;

        if (score >= multiplicator.prix) {
            score = score - multiplicator.prix;
            multiplicator.calprix();
            multiplicator.augmenterMultiplicateur();

            multiplicateur = multiplicator.multiplicateur;

            prixaffichage.innerText = multiplicator.prix;
            compteur.innerText = "X" + multiplicator.nombre;
            affichage.innerText = score;
        }
    }


/* the button element allows to modifie the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })

/* the multiplicateur element allows to increment the score */
    multibutton.addEventListener("click", function(e){
        e.preventDefault();
        //augmenterMultiplicateur();

       game();

    })

}
