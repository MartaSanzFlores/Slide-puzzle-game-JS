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

    },

    init : function () {
        const image_item = document.querySelectorAll(".puzzle__item__img");
        for (const item of image_item) {
            item.addEventListener('click', app.handleSlideImg)
        }
    }
}

app.init();