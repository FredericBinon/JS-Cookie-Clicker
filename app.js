


window.onload = () => {
    let multiObjet = {
        prix: 50,
        calprix(){
            this.prix = this.prix * this.nombre;
            return this.prix * this.nombre;
        },
        nombre: 1,
        multiplicateur(){
            
            return ++this.nombre;
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




  /*   function augmenterMultiplicateur () {
        multiplicateur++;
    }
 */
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
                          boutonactive=true;
          document.getElementsByName("autoclicker")[0].className = "activated";
          compteautoclicker.innerText = "0 Left";
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
        } else {
            document.getElementById("msg").style.display = "block";
            setTimeout(function () {
                document.getElementById("msg").style.display = "none";
           }, 3000 );

        }
    }
    function bonus () {
        let bonusObj = bonusObjet;
        if (score < bonusObj.prix) {
            console.log("message erreur")
            //message erreur s'affiche
        }
        else if (score >= bonusObj.prix) {
            let i;
            let dat = new Date();
            bonusObj.tempsDebut = dat.getSeconds();
            bonusObj.tempsFin = bonusObj.tempsDebut + 30;
            do{
                if(bonusObj.tempsFin > new Date().getSeconds()) {
                    return 1;
                }
                i++;
            } while(i<1000)
        }


/* the button element allows to modifie the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })

    autobutton.addEventListener("click", function(e){
        e.preventDefault();

        testautoclic(boutonactive);
    })

/* the multiplicateur element allows to increment the score */
    multibutton.addEventListener("click", function(e){
        e.preventDefault();
        //augmenterMultiplicateur();
        multiObjet.calprix();
        if (score >= multiObjet.prix) {
            multiplicateur = multiObjet.multiplicateur();
            score = score - multiObjet.prix;
            prixaffichage.innerText = multiObjet.prix;
            compteur.innerText = multiplicateur - 2;
        }



    })

}
