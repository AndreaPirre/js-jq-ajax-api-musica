// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
////////////////////////////////////////////////////////////
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music

$(document).ready(function() {


showCd()


});

// FUNZIONI
////////////////////////////////////////////

function showCd() {
    $.ajax({

        url:'https://flynn.boolean.careers/exercises/api/array/music',
        method:'GET',
        success: function (data, stato) {
        var album = data.response;
        for (var i = 0; i < album.length; i++) {
            var cd = album[i];
            var source = $("#template").html();
            var template = Handlebars.compile(source);
            var html = template(cd);
        $(".cds-container").append(html);
      }
    },
    error: function(richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
}
