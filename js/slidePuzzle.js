const app = {

    handleSlideImg : function (event) {
        //On récupère les positions de l'élément caché
        const colItemHidden = parseInt(document.querySelector(".puzzle__item__img--hidden").parentNode.dataset.col);
        const rowItemHidden = parseInt(document.querySelector(".puzzle__item__img--hidden").parentNode.dataset.row);

        //On récupère les positions du target
        const targetImg = event.target;
        const colTarget = parseInt(targetImg.parentNode.dataset.col);
        const rowTarget = parseInt(targetImg.parentNode.dataset.row);

        //On récupère l'élément caché
        const hiddenImg = document.querySelector(".puzzle__item__img--hidden");

        //En fonction de si on peut bouger en horizontal ou vertical on modifie la class hidden au click
        if (colItemHidden === (colTarget+1) && rowItemHidden === rowTarget || colItemHidden === (colTarget-1) && rowItemHidden === rowTarget) {
            targetImg.classList.add("puzzle__item__img--hidden");
            hiddenImg.classList.remove("puzzle__item__img--hidden");
            hiddenImg.src = targetImg.src;
        }

        if (rowItemHidden === (rowTarget+1) && colItemHidden ===    colTarget || rowItemHidden === (rowTarget-1) && colItemHidden === colTarget) {
            targetImg.classList.add("puzzle__item__img--hidden");
            hiddenImg.classList.remove("puzzle__item__img--hidden");
            hiddenImg.src = targetImg.src;
        }

        app.verification();

    },

    verification : function(){

        // On vérifie que le puzzle est fini
        
        if(document.querySelector(`.puzzle__item_1`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_01.png" &&
        document.querySelector(`.puzzle__item_2`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_02.png" &&
        document.querySelector(`.puzzle__item_3`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_03.png" &&
        document.querySelector(`.puzzle__item_4`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_04.png" &&
        document.querySelector(`.puzzle__item_5`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_05.png" &&
        document.querySelector(`.puzzle__item_6`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_06.png" &&
        document.querySelector(`.puzzle__item_7`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_07.png" &&
        document.querySelector(`.puzzle__item_8`).firstChild.src === "https://martasanzflores.github.io/Slide-puzzle-game-JS/images/logo_slides/logo_08.png"
        ){

            const border = document.querySelectorAll(`.puzzle__item`);

            for(let item of border){
                item.classList.add("noborder");
                item.classList.add("puzzle__hidden");
                item.firstChild.classList.add("puzzle__item__img--hidden");
            }

            let puzzle = document.querySelector(".puzzle");
            const logoImage = document.createElement('img');
            logoImage.classList.add("logo__image");
            logoImage.classList.add("slow-appear");
            logoImage.src = "./images/logo.png";
            puzzle.prepend(logoImage); 

            let titre = document.querySelector("h1");
            titre.innerHTML = "Félicitations ! Vous avez gagné"

            const button = document.querySelector(".button");
            button.classList.add("puzzle__hidden");

            setTimeout(() => {
                logoImage.classList.add("show");
            }, 250);

        }

    },

    init : function () {

        const image_item = document.querySelectorAll(".puzzle__item__img");

        for (const item of image_item) {
            item.addEventListener('click', app.handleSlideImg)
        }
        
    }
}

app.init();