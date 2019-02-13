# JS-Cookie-Clicker

JS-Cookie-Clicker is a teamwork project application based on JavaScript developed within the BeCode training.  

Here is an example of [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) application.


## Final work online:
[Grany Click](https://fredericbinon.github.io/JS-Cookie-Clicker/)

## Work visual preview:
<img src="https://github.com/FredericBinon/JS-Cookie-Clicker/blob/development/images/final%20visual.png" class="final visual"/>

## Co-workers

5 learners from BeCode program. Start with almost no code knowledge 5 weeks ago. 

* [AMAN Djedou Arnaud](https://github.com/djedou) 
* [BAQUET Mathilde](https://github.com/MathildeBa)
* [BINON Frédéric](https://github.com/FredericBinon) 
* [GOLDESTEIN Andrés](https://github.com/AndresGol) 
* [RODRIGUEZ Amalia](https://github.com/AmaliaRVM) 

 

## Acknowledgments

* SCRUM
* .html
* .css
* .js
* .svg
* GitHub

## Skills

- Understanding
- Organisation
- Execution
- Communication
- Cooperation

## Objectives

## Timetable:

From  06 Feb 2019 to 13 Feb 2019.

## Insctruction:
*Above you will find the instructions gave by the BeCode coachs for the development of the JS-Cookie-Clicker application* 

> Étape 1 : _structure de base_
>Faire une structure de base *HTML* / *CSS* / *JS*. Dans le HTML, mettre un bouton avec un identifiant « clic » et une `div` >avec un identifiant `affichage`, dont la valeur initiale sera `0`. 
-----------------
> Étape 2 : _préparer le JS_
>Préparez les variables en tête du *JS* qui nous permettront de manipuler notre bouton et notre `div`. Nous aurons également >besoin d'une variable `score` que nous initialiserons à `0`.
-----------------
> Étape 3 : _augmenter le score_
>Quand on clique sur le bouton, faire augmenter la variable `score` de `1`, puis afficher ce score dans la `div` affichage.
-----------------
> Étape 4 : _préparation du multiplicateur_
>Ajouter un bouton dont l'identifiant est `multiplier`. Créer un compteur de clics (dont la variable s'appellera >`multiplicateur` et sera initialisée à `1`) sur ce bouton. La fonction associée au clic du multiplicateur s'appellera >`augmenterMultiplicateur`.
-----------------
>Étape 5 : _utilisation du multiplicateur_
>Faire en sorte que l'augmentation du score via le clic du premier bouton ne soit plus de `1` mais de la valeur du >multiplicateur. Par exemple, si j'ai cliqué une fois sur le bouton multiplicateur, chaque clic sur le premier bouton >ajoutera désormais `2` au lieu de `1`.
-----------------
>Étape 6 : _prix du multiplicateur_
>Le multiplicateur vous permet de gagner du score plus rapidement. Ça ne devrait pas être gratuit ! Faites en sorte que >cliquer sur le bouton multiplicateur diminue de `50` votre score.
-----------------
>Étape 7 : _on ne fait pas crédit_
>On ne peut pas faire crédit et on ne veut pas de score négatif. Pensez à mettre à jour l'affichage du score après l'achat !
-----------------
>Étape 8 : _affichage du compteur_
>Affichez le compteur de multiplicateur à l'intérieur du bouton. Par exemple, si compteur vaut `5`, il faut que le texte du >bouton soit « Multiplicateur x5 ».
-----------------
>Étape 9 : _augmentation du prix_
>Acheter plein de multiplicateurs est trop facile. Essayez à partir de l'étape 6, vous comprendrez pourquoi il faudrait que >plus on achète de multiplicateurs, plus ceux-ci soit chers.
>Par exemple, le premier vaudrait `50`, le suivant `100`, le suivant `200`, etc.. Pas la peine de vous compliquer la vie, ne >faites pas pleins de conditions. Trouvez une autre façon de faire évoluer le prix !
-----------------
>Étape 10 : _affichage du prix_
>Dans le texte du bouton, en plus du « x5 », ajouter le coût du prochain achat.
-----------------
>Étape 11 : _autoclicker_
>Nouvelle amélioration à acheter : Autoclick. Dès que vous avez un score de `200`, un clic est fait automatiquement chaque >seconde. (`setInterval` est ton ami)
-----------------
>Étape 12 : _achat d'autoclicker_
>L'autoclicker ne sera plus automatique. Il faut dorénavant acheter l'autoclicker. Vous ajouterez un bouton avec l'id >`autoclic`. Il coutera `500`. Une fois que l'autoclicker a été acheté, il faudra désactiver le bouton d'achat de >l'autoclic.
-----------------
>Étape 13 : _achat d'un bonus_
>Désormais, on doit pouvoir acheter un bonus qui augmente le score de 200% à chaque clic pendant 30 secondes. C'est à dire >que si à chaque clic, le score augmente de `3`, pendant les 30 secondes de bonus le score augmentera de `6` à chaque clic, >au bout des 30 secondes le score augmentera à nouveau de `3` par clic.
>Vous créerez le bouton « BONUS » avec l'id `bonus`, et le bonus coutera `5000`. Lorsque le bonus est acheté, le nombre de >seconde s'affichera dans le bouton avec le décompte et le bouton devra etre désactivé pendant le temps du bonus. Quand le >bonus est fini, le bouton est réactivé et retrouve son texte d'origine.
-----------------
>Étape 14 : _désactiver les boutons (si j'ai pas le score pour acheter les améliorations)_
>Faire en sorte que les boutons multiplicateur, autoclic et bonus ne soient clicables QUE si j'ai le score nécessaire pour >les acheter.
-----------------
>Étape 15 : _du CSS_
>Que ce soit beau ! Pas d'images ! 
-----------------


## Timeline / Workflow
### Wendesday 06/02
- Visualization of video SCRUM.
- Creation of GitHub Repo and branches.
- Timetable design.
- Amalia and Arnaud start the "clic" and the "score" code on .js. 
- Frederic and Andres initialisation of design on .css and html.

### Thursday 07/02
- GitHub branches organisation and remediation.
- Amalia and Arnaud *multiplicator* button function .js. (price and numbers).
- Mathilde and Andres design improve (.html and .css.)
- Frerderic: code preview on paper (UML). 

### Friday 08/02
- Arnaud, Amalia and Frederic conflicts resolution between *multiplicator* & *autoclicker* buttons.
- Mathilde : starting code of *bonus* button .js.
- Andres: keep going on design .CSS .SVG.

### Monday 11/02
- Amalia and Frederic display of error speach balloon.
- Andres keep going on design : text style and button animation.
- Frederic conflict resolution GitHub.
- Arnaud and Mathilde start the bonus algorithm .js.

### Tuesday 12/02
- Andres and Amalia visual charter fixed .CSS
- Amalia and Frederic works on speach ballon alteration.
- Arnaud and Mathilde almost finish the bonus botton. And start the *countdown* code on .js.
- Frederic finish the *autoclick* button.

### Wendesday 13/02
- Correcting last bugs.
- Testing the game.
- Merging the *developpment* branch into the *master* branch.
- Celebrating our first commun project.  

## What we learn...  
During the process of this project we faced differents problems regarding the framework, the method as well as the organisation. We finally came up with new proposals that allows us to stablish a good workflow. Lead by our Scrum master, Mathilde, we ended up working in pairs each of the tasks related with javascript and css. Due to a lack of structure in GitHub we all worked in the same branch called *development*... Yes, we all know now, this was not the better way to do it, we struggle mostly with the merging, but the good thing is that we all learn about the importance of a good GitFlow.

