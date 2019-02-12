
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
        tempsFin : 0,
        tempsDebut : 0,
        count : 0

    }


    let score = 0;
    let multiplicateur = 1;
    let boutonactive=false;
    let besoin = 1;
    let autoclicRestants= 3;
    let autoclicUtilises=0;
    let button = document.getElementById("clic");
    let affichage = document.getElementById("affichage");
    let multibutton = document.getElementById("multiplier");
    let autobutton = document.getElementsByName("autoclicker")[0];
    let prixaffichage = document.getElementsByClassName("prix")[0];
    let compteur = document.getElementsByClassName("compteur")[0];
    let compteautoclicker= document.getElementsByClassName("compteur")[1];
    let prixAutoclicker = document.getElementsByClassName("prix")[1];
    let bouttonBonus = document.getElementById("bonus");


    function click(multiplicateur) {
        for (var i= 1; i <= multiplicateur; i++) {
            score++;
        }
        affichage.innerText = score;
    }

    function clicauto(oldScore, autoclicUtilises){
      score=oldScore+autoclicUtilises;
      affichage.innerText = score;
    }

    function testautoclic(oldAutoclicRestants, oldBesoin, oldAutoclicUtilises){
      console.log('click')
      if (autoclicRestants<1) {
        document.getElementsByName("autoclicker")[0].className = "activated";
        alert("Bin non gros malin, t'as d'ja tout pris");
      }
      else {
        autoclicUtilises = oldAutoclicUtilises + 1;
        autoclicRestants = oldAutoclicRestants -1;
        console.log(autoclicUtilises);
        if (score<besoin){
            alert("Wesh ma gueule, il te faut plus de cookies pour ça");
        }
        if (autoclicRestants==0){
            document.getElementsByName("autoclicker")[0].className = "activated";
        }
        if (score >= oldBesoin) {
          score=score-oldBesoin;
          besoin=oldBesoin*10;
          console.log(besoin);
          prixAutoclicker.innerText=besoin;
          affichage.innerText = score;
          setInterval(()=>clicauto(score, autoclicUtilises),1000);
          compteautoclicker.innerText = autoclicRestants + " Left";
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
            document.getElementById("msg").style.display = "block";
            setTimeout(function () {
                document.getElementById("msg").style.display = "none";
           }, 3000 );

        }
    }
    function bonus () {
        let bonusObj = bonusObjet;
        if (score >= bonusObj.prix && bonusObj.count === 0) {
            let dat = new Date();
            bonusObj.tempsDebut = dat.getSeconds();
            bonusObj.tempsFin = bonusObj.tempsDebut + 30;
            score= score *2;
            affichage.innerText = score;
            ++bonusObj.count;
        } else if (score >= bonusObj.prix && bonusObj.count !== 0){
            let n = new Date().getSeconds();
            if(n < bonusObj.tempsFin){
                score= score *2;
                affichage.innerText = score;
            }

        }
    }



/* the button element allows to modifie the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })

    autobutton.addEventListener("click", function(e){
        e.preventDefault();

        testautoclic(autoclicRestants, besoin, autoclicUtilises);
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
