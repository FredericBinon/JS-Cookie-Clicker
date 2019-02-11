window.onload = () => {

    let multiObjet = {
        prix: 50,
        nombre: 1,
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
    let boutonactive=false;
    let button = document.getElementById("clic");
    let affichage = document.getElementById("affichage");
    let multibutton = document.getElementById("multiplier");
    let autobutton = document.getElementsByName("autoclicker")[0];
    let prixaffichage = document.getElementsByClassName("prix")[0];
    let compteur = document.getElementsByClassName("compteur")[0];
    let compteautoclicker = document.getElementsByClassName("compteur")[1];


    function click(multiplicateur) {
        for (var i= 1; i <= multiplicateur; i++) {
            score++;
        }
        affichage.innerText = score;
    }

    function clicauto(oldScore){
      score=oldScore+1;
      affichage.innerText = score;
    }

    function testautoclic(boutonactive){
      if (boutonactive == false) {
        console.log(boutonactive);
        if (score<10){
            alert("erreur: Wesh ma gueule, il te faut plus de cookies pour ça");
        }
        if (score >= 10) {
          score=score-10;
          affichage.innerText = score;
          setInterval(()=>clicauto(score),1000);
        }
      }
      else {
              alert("erreur: Bin non gros malin, tu l'as deja activé");
      }
    }

    function game() {
        let multiplicator = multiObjet;

        if (score >= multiplicator.prix) {
            score = score - multiplicator.prix;
            multiplicator.calprix();
            multiplicator.augmenterMultiplicateur();

            multiplicateur = multiplicator.multiplicateur;

            prixaffichage.innerText = multiplicator.prix;
            compteur.innerText ="X" + multiplicator.nombre;
            affichage.innerText = score;
        }
    }


/* the button element allows to modifie the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })

    autobutton.addEventListener("click", function(e){
        e.preventDefault();

        testautoclic(boutonactive);
        boutonactive=true;
        document.getElementsByName("autoclicker")[0].className = "activated";
        compteautoclicker.innerText = "0 Left";
    })

/* the multiplicateur element allows to increment the score */
    multibutton.addEventListener("click", function(e){
        e.preventDefault();
        //augmenterMultiplicateur();

       game();

    })

}
