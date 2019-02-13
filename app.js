
window.onload = () => {

//VARIABLES ASSIGNATION

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

    let score = 0;
    let multiplicateur = 1;
    let boutonactive=false;
    let besoin = 500;
    let autoclicUtilises = 0;
    let autoclicRestants = 10;
    let priceBonus = 5000;
    let timer = 30;
    let bonusActif=false;
    let button = document.getElementById("cookie");
    let affichage = document.getElementById("affichage");
    let multibutton = document.getElementById("multiplier");
    let autobutton = document.getElementsByName("autoclicker")[0];
    let prixaffichage = document.getElementsByClassName("prix")[0];
    let prixAutoclicker= document.getElementsByClassName("prix")[1];
    let compteur = document.getElementsByClassName("compteur")[0];
    let compteautoclicker= document.getElementsByClassName("compteur")[1];
    let timeLeft = document.getElementsByClassName("compteur")[2];
    let bouttonBonus = document.getElementsByClassName("bonus")[0];


//FUNCTIONS

    function game() {
        let multiplicator = multiObjet;

        if (score >= multiplicator.prix) {
            score = score - multiplicator.prix;
            multiplicator.calprix();
            multiplicator.augmenterMultiplicateur();
            multiplicateur = multiplicator.multiplicateur;
            if  (bonusActif==true){
              multiplicateur = multiplicateur*2;
            }
            prixaffichage.innerText = multiplicator.prix;
            compteur.innerText ="X" + multiplicator.nombre;
            affichage.innerText = score;
        } else {
            error("You don't have enough cookies, still baking!!!", "#msg");
        }
    }

    function click(multiplicateur) {
      for (var i= 1; i <= multiplicateur; i++) {
        score++;
      }
        affichage.innerText = score;
    }

    function testautoclic(oldAutoclicRestants, oldBesoin, oldAutoclicUtilises){
      if (autoclicRestants<1) {
        document.getElementsByName("autoclicker")[0].className = "activated";
        error("Nah man, you've already taken all those shits!", "#msg");
      }
      else {
        if (score<besoin){
            error("Hey bro, wtf u doin'?! You need more cookies for this!", "#msg");
        }
        if (score >= besoin) {
          oldAutoclicUtilises=autoclicUtilises;
          oldAutoclicRestants=autoclicRestants;
          autoclicUtilises = oldAutoclicUtilises + 1;
          autoclicRestants = oldAutoclicRestants -1;
          oldBesoin=besoin;
          score=score-oldBesoin;
          besoin=oldBesoin*5;
          prixAutoclicker.innerText=besoin;
          affichage.innerText = score;
          setInterval(()=>clicauto(score),1000);
          compteautoclicker.innerText = autoclicRestants + " Left";
        }
        if (autoclicRestants==0){
            document.getElementsByName("autoclicker")[0].className = "activated";
        }
      }
    }

    function clicauto(oldScore){
      score=oldScore+1;
      affichage.innerText = score;
    }

    function bonus (priceBonus, oldScore, timer, oldMultiplicateur) {
      if (score<priceBonus){
        error("Duuuuuuuuude! \n Come on.. Just keep on clicking!", "#msg");
      } else {
        if (bonusActif==false){
          score= oldScore - priceBonus;
          affichage.innerText = score;
          multiplicateur = oldMultiplicateur*2;
          bonusActif=true;
          var interval = setInterval(function(){
            timer--;
            document.getElementsByName("bonus")[0].className = "activated";
            timeLeft.innerText= timer + "sec";
            if (timer == 0){
              clearInterval(interval);
              timeLeft.innerText= "Available"
              multiplicateur = multiplicateur/2;
              timer = 30;
              document.getElementsByName("bonus")[0].className = "bonus";
              bonusActif = false;
            }
          }, 1000);
        } else{
            error("Really?! Just open your eyes, it's already running!", "#msg");
        }

      }
    }

    function error (text, selector) {
        document.querySelector(selector).innerText = text;
        document.querySelector(selector).style.display = "block";
        setTimeout ( ()=> {
            document.querySelector(selector).innerText = "";
            document.querySelector(selector).style.display = "none";
        }, 3000)
    }


//CLICS INTERACTIONS

/* the multiplicateur element allows to increment the score */
    multibutton.addEventListener("click", function(e){
      e.preventDefault();
    //augmenterMultiplicateur();
      game();
    })
/* the button element allows to mutliply the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })
/* the button element allows to add one extra clic each second*/
    autobutton.addEventListener("click", function(e){
        e.preventDefault();
        testautoclic();
    })
/* the bonus element multiplied the score during 30sec */
    bouttonBonus.addEventListener("click",function (e){
        e.preventDefault ();
        bonus(priceBonus, score, timer, multiplicateur);
    })
}
