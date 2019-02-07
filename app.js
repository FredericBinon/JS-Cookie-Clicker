


window.onload = () => {
    let score = 0;
    let button = document.getElementById("clic");
    let affichage = document.getElementById("affichage");

    function clic() {
        score++;
        affichage.innerText = score;
    }

    button.addEventListener("click", function(e){
        e.preventDefault();
        clic();
    })
    

}