window.onload = () => {

    let autobutton = document.getElementsByName("autoclicker");
    let affichage = document.getElementById("affichage");
    let clicseconde=0;
    let boutonactive=false;

    /* the autoclicker element allows to increment the score */
    autobutton.addEventListener("click", function(e){
        e.preventDefault();
        if (boutonactive = false) {
            if (score >= 500) {
                score=score-500;
                setInterval("score=score+1",1000);
                boutonactive=true;
                document.getElementsByName("autoclicker").className = "activated";
            }
            if (score<500){
                /*erreur: Wesh ma gueule, il te faut plus de cookies pour ça*/
            } 
        }
        else {
                /*erreur: Bin non gros malin, tu l'as deja activé*/
        }
        
    })   




}