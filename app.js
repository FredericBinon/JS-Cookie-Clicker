
window.onload = () => {
    let multiObjet = {
        prix: 50,
        nombre:1,
        multiplicateur:1,
        augmenterMultiplicateur(){
          ++this.multiplicateur;
          ++this.nombre;
        },
        calprix(){
          this.prix = this.prix*2;
        }
    }

    let bonusObjet = {
        prix: 100,
        tempsActif : 0,
        tempsDebut : 0,
        count : 0

    }


    let score = 0;
    let multiplicateur = 1;
    let boutonactive=false;
    let besoin = 1;
    let autoclicUtilises = 0;
    let autoclicRestants = 3;
    let button = document.getElementById("cookie");
    let affichage = document.getElementById("affichage");
    let multibutton = document.getElementById("multiplier");
    let autobutton = document.getElementsByName("autoclicker")[0];
    let prixaffichage = document.getElementsByClassName("prix")[0];
    let prixAutoclicker= document.getElementsByClassName("prix")[1];
    let compteur = document.getElementsByClassName("compteur")[0];
    let compteautoclicker= document.getElementsByClassName("compteur")[1];
    let bouttonBonus = document.getElementById("bonus");


    function click(multiplicateur) {
        let tempsFin = new Date().getSeconds();
        let bonObj = bonusObjet ;
        if ( bonObj.tempsActif == 1 && tempsFin < bonObj.tempsDebut){
            multiplicateur = multiplicateur * 2 ;
            console.log("djed2: " + tempsFin);
            console.log("mul: " + multiplicateur);

        }

        for (var i= 1; i <= multiplicateur; i++) {
            score++;
        }
        affichage.innerText = score;
    }

    function clicauto(oldScore){
      score=oldScore+1;
      affichage.innerText = score;
    }

    function error (text, selector) {
        document.querySelector(selector).innerText = text;
        document.querySelector(selector).style.display = "block";
        setTimeout ( ()=> {
            document.querySelector(selector).innerText = "";
            document.querySelector(selector).style.display = "none";
        }, 3000)
    }

    function testautoclic(oldAutoclicRestants, oldBesoin, oldAutoclicUtilises){
      console.log(besoin, autoclicRestants, autoclicUtilises)
      if (autoclicRestants<1) {
        document.getElementsByName("autoclicker")[0].className = "activated";
        error("Bin non gros malin, t'as d'ja tout pris", "#msg");
      }
      else {
        if (score<besoin){
            error("Wesh ma gueule, il te faut plus de cookies pour ça", "#msg");
        }
        if (score >= besoin) {
          autoclicUtilises = oldAutoclicUtilises + 1;
          autoclicRestants = oldAutoclicRestants -1;
          score=score-oldBesoin;
          besoin=oldBesoin*10;
          prixAutoclicker.innerText=besoin;
          affichage.innerText = score;
          setInterval(()=>clicauto(score),1000);
          boutonactive=true;
          document.getElementsByName("autoclicker")[0].className = "activated";
          compteautoclicker.innerText = "0 Left";
        }
        if (autoclicRestants==0){
            document.getElementsByName("autoclicker")[0].className = "activated";
        }
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
            error("You don't have enough cookies, still baking!!!", "#msg");
        }
    }
    function bonus () {
        let bonusObj = bonusObjet;
        if (score >= bonusObj.prix && bonusObj.count == 0) {
            let dat = new Date();
            bonusObj.tempsDebut = dat.getSeconds() + 30;
            bonusObj.tempsActif = 1;
            score = score - bonusObj.prix;
            affichage.innerText = score;
           /*  bonusObj.tempsFin = bonusObj.tempsDebut + 30; */
            /* score= score *2; */
           /*  affichage.innerText = score; */
            ++bonusObj.count;
        }/*  else if (score >= bonusObj.prix && bonusObj.count !== 0){
            let n = new Date().getSeconds();
            if(n < bonusObj.tempsFin){
                score= score *2;

            }

        } */
    }



/* the button element allows to modifie the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })

    autobutton.addEventListener("click", function(e){
        e.preventDefault();

        testautoclic();
    })

/* the multiplicateur element allows to increment the score */
    multibutton.addEventListener("click", function(e){
        e.preventDefault();

        //augmenterMultiplicateur();
        game();
    })
/* the bonus element multiplied the score suring 30sec */
    bouttonBonus.addEventListener("click",function (e){
        e.preventDefault ();
        bonus();
    })
}
