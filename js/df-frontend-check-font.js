
//fonction permetant de visualiser la police choisi
jQuery(document).ready(function($)
{
    /* gestion des accents */
    String.prototype.sansAccent = function(){
        var accent = [
            /[\300-\306]/g, /[\340-\346]/g, // A, a
            /[\310-\313]/g, /[\350-\353]/g, // E, e
            /[\314-\317]/g, /[\354-\357]/g, // I, i
            /[\322-\330]/g, /[\362-\370]/g, // O, o
            /[\331-\334]/g, /[\371-\374]/g, // U, u
            /[\321]/g, /[\361]/g, // N, n
            /[\307]/g, /[\347]/g, // C, c
        ];
        var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
         
        var str = this;

        for(var i = 0; i < accent.length; i++){
            str = str.replace(accent[i], noaccent[i]);
        }
         
        return str;
    }
   
    /* gestion de l'affichage des fonts dans les boutons*/
    var listespan = new Array();
    listespan = $("#pa_choix-de-police").next().children("ul li");     

    for (var i=0; i<listespan.length; i++) {
        listespan[i].style.fontFamily = listespan[i].title;
    }

    /* gestion de l'affichage avec ou sans accents si font LOVE*/
    $("#votre_personnalisation").change(function() {

        /* recuperation du texte saisi initial*/
        if (avecAccent === undefined){
            var avecAccent=document.getElementById("votre_personnalisation").value;      
        }  

        /*afiichage du texte saisie avec la font choisi*/
        $("#pa_choix-de-police").click(function(){

                var font = $(this).children("option:selected").text();

                if(font === 'Ecriture-3'){

                    var sansAccent=document.getElementById("votre_personnalisation").value;
                    sansAccent.sansAccent();
                    document.getElementById("votre_personnalisation").value = sansAccent.sansAccent();

                }
                else {
                    document.getElementById("votre_personnalisation").value = avecAccent;
                }

                document.getElementById("votre_personnalisation").style.fontFamily = font;

            });
    });

});
