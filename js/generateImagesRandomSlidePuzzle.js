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

            app_generateSliderImages.newLogoItemImage_array.push(newLogoItemImage);
        }

        app_generateSliderImages.notPossible();
       
        for(let i = 0; i < images_logo.length; i++){
        
            const puzzle = document.querySelectorAll(".puzzle__item");
            //On ajoute chaque img creé à un div html aleatoire
            puzzle[app_generateSliderImages.nums[i]].prepend(app_generateSliderImages.newLogoItemImage_array[i]);

        }

        

    },

    //Methode pour generer un nombre aleatoire integer entre 0 et 8 sans repetition.
    nums : [],
    arr : ["x","x","x","x","x","x","x","x"],

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

    // on verifie que le niveau de melange ce n'est pas impair (taquin impossible)
    notPossible : function () {


        //On utilise la methode getRandomNumber() pour trouver un nombre random entre 0 et 8
        app_generateSliderImages.getRandomNumbers();

        for(let i = 0; i < app_generateSliderImages.arr.length; i++){
            app_generateSliderImages.arr.splice(app_generateSliderImages.nums[i], 1, i);
        }

        const ids = app_generateSliderImages.arr;
        
        let num = 0;
        for (let i = 0; i < ids.length; i++) {
            if(ids[i] != 8){
                for(let n = i; n < ids.length; n++){
                    if(ids[i] > ids[n]){
                    num = num +1;
                    };
                }
            }
        };


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