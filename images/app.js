


window.onload = () => {
    // let score = 0;
    // let button = document.getElementById("clic");
    // let affichage = document.getElementById("affichage");

    // function clic() {
    //     score++;
    //     affichage.innerText = score;
    // }

    // button.addEventListener("click", function(e){
    //     e.preventDefault();
    //     clic();
    // })
    
    let score = 0;
    let multiplicateur = 1;
    let button = document.getElementById("clic");
    let affichage = document.getElementById("affichage");
    let multibutton = document.getElementById("multiplier");

    function augmenterMultiplicateur () {
        multiplicateur++;
    }

    function click(multiplicateur) {
        for (var i= 1; i <= multiplicateur; i++) {
            score++;
        }
        affichage.innerText = score;
    }
/* the button element allows to modifie the score*/
    button.addEventListener("click", function(e){
        e.preventDefault();
        click(multiplicateur);
    })
/* the multiplicateur element allows to increment the score */
    multibutton.addEventListener("click", function(e){
        e.preventDefault();
        augmenterMultiplicateur();
    } )
}