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

        

        //Pour chaque url dans le tableau images_logo, on créé une balise img
        for(let i = 0; i < images_logo.length; i++){
            const newLogoItemImage = document.createElement('img');
            newLogoItemImage.src = "./images/logo_slides/" + images_logo[i];
            newLogoItemImage.classList.add("puzzle__item__img");
            newLogoItemImage.setAttribute("id", i);
            newLogoItemImage.alt = "Logo Web Developer Marta S.F";
            //On ajoute une class hidden pour cacher une des nos images affichées
            if(i == images_logo.length - 1) {
                newLogoItemImage.classList.add("puzzle__item__img--hidden");
            };

            // On met les nouvelles balises dans un tableau
            app_generateSliderImages.newLogoItemImage_array.push(newLogoItemImage);
        }

        // On vérifie que la solution du puzzle est possible
        app_generateSliderImages.notPossible();
       
        // Si la solution du taquin est possible on ajoute les images au DOM
        for(let i = 0; i < images_logo.length; i++){
            
            const puzzle = document.querySelectorAll(".puzzle__item");
            
            //On ajoute chaque img créé à un div html aléatoire
            puzzle[app_generateSliderImages.nums[i]].prepend(app_generateSliderImages.newLogoItemImage_array[i]);

        }

        

    },

    //Méthode pour générer un nombre aléatoire entier entre 0 et 8 sans répetition.
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

    // on vérifie que le niveau de mélange n'est pas impair (taquin impossible)
    notPossible : function () {


        //On utilise la méthode getRandomNumber() pour créer un tableau des nombres aléatoires entre 0 et 8
        app_generateSliderImages.getRandomNumbers();

        // boucle permetant de déclarer la position des images si on applique le tableau aléatoire
        for(let i = 0; i < app_generateSliderImages.arr.length; i++){
            app_generateSliderImages.arr.splice(app_generateSliderImages.nums[i], 1, i);
        }

        // On doit avoir un tableau de 1-9 pour pouvoir compter le nombre de points de mélange
        const ids = app_generateSliderImages.arr.map(function(num) {
            return num+1;
        });

        
        

        // Selon la position des images aléatoires par rapport la position initiale, on calcule les points de mélange du taquin
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

        

        // Si le nombre de points de mélange est impair, le taquin est impossible de résoudre, on relance la création du tableau aléatoire et on revérifie
        if(num%2 !== 0){
            app_generateSliderImages.notPossible();
        };

        
    },

        
    //On initialise le module en déclanchant la méthode generateSliderImages()
    init : function () {
        app_generateSliderImages.generateSliderImages();
    }
}

app_generateSliderImages.init();

// Function pour rafraichir puzzle
function refresh() {
    app_generateSliderImages.init();
  }

const refresh_button = document.querySelector(".button");
refresh_button.addEventListener("click", refresh);
