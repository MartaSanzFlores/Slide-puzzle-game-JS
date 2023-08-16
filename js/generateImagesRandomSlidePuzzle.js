const app_generateSliderImages = {

    newLogoItemImage_array : [],

    generateSliderImages : function (){

        //Tableau d'url d'images pour puzzle
        const images_logo = [
        "logo_01.png",
        "logo_02.png",
        "logo_03.png",
        "logo_04.png",
        "logo_05.png",
        "logo_06.png",
        "logo_07.png",
        "logo_08.png",
        "logo_09.png",
        ];

        

        //Pour chaque url dans le tableau images_logo, on crée une balise img
        for(let i = 0; i < images_logo.length; i++){
            const newLogoItemImage = document.createElement('img');
            newLogoItemImage.src = "./images/logo_slides/" + images_logo[i];
            newLogoItemImage.classList.add("puzzle__item__img");
            newLogoItemImage.setAttribute("id", i);
            newLogoItemImage.alt = "Logo Web Developer Marta S.F";
            //On ajoute une class hidden pour cacher une des nos images afichés
            if(i == images_logo.length - 1) {
                newLogoItemImage.classList.add("puzzle__item__img--hidden");
            };

            // On met les nouvelles balises dans un tableau
            app_generateSliderImages.newLogoItemImage_array.push(newLogoItemImage);
        }

        // On verifie que la solution du puzzle est possible
        app_generateSliderImages.notPossible();
       
        // Si la solution de taquin esr possible on ajoute les images au DOM
        for(let i = 0; i < images_logo.length; i++){
            
            const puzzle = document.querySelectorAll(".puzzle__item");
            
            //On ajoute chaque img creé à un div html aleatoire
            puzzle[app_generateSliderImages.nums[i]].prepend(app_generateSliderImages.newLogoItemImage_array[i]);

        }

        

    },

    //Methode pour generer un nombre aleatoire integer entre 0 et 8 sans repetition.
    nums : [],

    getRandomNumbers : function () {

        app_generateSliderImages.nums = [];

        for(let i = 0; i < 9; i++){
            let number = Math.floor(Math.random() *9);
            while (app_generateSliderImages.nums.includes(number)) {
            number = Math.floor(Math.random() *9);
            };       

        app_generateSliderImages.nums.push(number);

        }

    },

    arr : ["x","x","x","x","x","x","x","x"],

    // on verifie que le niveau de melange ce n'est pas impair (taquin impossible)
    notPossible : function () {


        //On utilise la methode getRandomNumber() pour creer un tableau des nombres random entre 0 et 8
        app_generateSliderImages.getRandomNumbers();

        // boucle permetant declarer la position des images si on aplique le tableau random
        for(let i = 0; i < app_generateSliderImages.arr.length; i++){
            app_generateSliderImages.arr.splice(app_generateSliderImages.nums[i], 1, i);
        }

        // On doit avoir un tableau de 1-9 pour povoir compter le nombre de points de melange
        const ids = app_generateSliderImages.arr.map(function(num) {
            return num+1;
        });

        
        

        // Selon la position des images random par rapport la position initial, on calcule les points de melange du taquin
        let num = 0;
        for (let i = 0; i < ids.length; i++) {
            if(ids[i] != 9){
                for(let n = i; n < ids.length; n++){
                    if(ids[i] > ids[n]){
                    num = num +1;
                    };
                }
            }
        };

        

        // Si le nombre de points de melange est impair, le taquin est imposible de resoudre, on relance la creation du tableau random et on reverifie
        if(num%2 !== 0){
            app_generateSliderImages.notPossible();
        };

        
    },

        
    //On inicialise le module en declanchant la methode generateSliderImages()
    init : function () {
        app_generateSliderImages.generateSliderImages();
    }
}

app_generateSliderImages.init();

// Function to refresh puzzle

function refresh() {
    app_generateSliderImages.init();
  }

const refresh_button = document.querySelector(".button");
refresh_button.addEventListener("click", refresh);
