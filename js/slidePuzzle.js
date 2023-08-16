const app = {

    handleSlideImg : function (event) {
        //On recupere les positions du element caché
        const colItemHidden = parseInt(document.querySelector(".puzzle__item__img--hidden").parentNode.dataset.col);
        const rowItemHidden = parseInt(document.querySelector(".puzzle__item__img--hidden").parentNode.dataset.row);

        //On recupere les positions du target
        const targetImg = event.target;
        const colTarget = parseInt(targetImg.parentNode.dataset.col);
        const rowTarget = parseInt(targetImg.parentNode.dataset.row);

        //On recupere l'element caché
        const hiddenImg = document.querySelector(".puzzle__item__img--hidden");

        //En dependant de si on peut bouger en horizontal ou vertical on modifie la class hidden au click
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

        // On verifie que le puzzle est fini
        
        if(document.querySelector(`.puzzle__item_1`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_01.png" &&
        document.querySelector(`.puzzle__item_2`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_02.png" &&
        document.querySelector(`.puzzle__item_3`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_03.png" &&
        document.querySelector(`.puzzle__item_4`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_04.png" &&
        document.querySelector(`.puzzle__item_5`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_05.png" &&
        document.querySelector(`.puzzle__item_6`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_06.png" &&
        document.querySelector(`.puzzle__item_7`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_07.png" &&
        document.querySelector(`.puzzle__item_8`).firstChild.src === "http://127.0.0.1:5500/images/logo_slides/logo_08.png"
        ){

            const border = document.querySelectorAll(`.puzzle__item`);

            for(let item of border){
                item.classList.add("puzzle__item2");
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