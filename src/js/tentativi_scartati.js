// carica documento html prima
$(document).ready(function() {
})


// funzione + per aggiungere elementi
/*
$('.pluss').click(function() {
  var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto_2)");
  if (refertChoice == "referto_1") {
    var slider = ''
    for (let i = 0; i < referto_1.length; i++) {
      slider +=
      '<div class="mySlides fade">' +
      '<div class="numbertext">' + (i+1) + '/' + (referto_1.length) + '</div>' +
      '<img src="'+ referto_1[i]+'">' +
      '</div>';
    }
    $('main').append(slider);
  } else if (refertChoice == "referto_2") {
    var slider = ''
    for (let i = 0; i < referto_2.length; i++) {
      slider +=
      '<div class="mySlides fade">' +
      '<div class="numbertext">' + (i+1) + '/' + (referto_2.length) + '</div>' +
      '<img src="'+ referto_2[i] +'">' +
      '</div>';
    }
    $('main').append(slider);
  } else if (refertChoice == "referto_3") {
    var slider = ''
    for (let i = 0; i < referto_3.length; i++) {
      slider +=
      '<div class="mySlides fade">' +
      '<div class="numbertext">' + (i+1) + '/' + (referto_3.length) + '</div>' +
      '<img src="'+ referto_3[i] +'">' +
      '</div>';
    }
    $('main').append(slider);
  } else if (refertChoice == "referto_4") {
    var slider = ''
    for (let i = 0; i < referto_4.length; i++) {
      slider +=
      '<div class="mySlides fade">' +
      '<div class="numbertext">' + (i+1) + '/' + (referto_4.length) + '</div>' +
      '<img src="'+ referto_4[i] +'">' +
      '</div>';
    }
    $('main').append(slider);
  } else {
    alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto_2)")
  }  
});
*/






/*
$('.pluss').click(function() {
  // ATTENZIONE
  // var refertChoice = prompt("Referti disponibili: "+nomiReferti+" Scegliere digitanto referto punto nome in minuscolo (es. referto.giacomo)");
  // la variabile refertChoice pota un errore, prompt e logica non sono aggiornati
  var refertChoice = prompt("Referti disponibili: "+nomiReferti+" Scegliere digitanto referto punto nome in minuscolo (es. referto.giacomo)");
  console.log(refertChoice[3]);
  if (refertChoice == "referto_1" || refertChoice == "referto_2" || refertChoice == "referto_3" || refertChoice == "referto_4") {
    var slider = ''
    for (let i = 0; i < refertChoice.length; i++) {
      slider +=
      '<div class="mySlides fade">' +
      '<div class="numbertext">' + (i+1) + '/' + (refertChoice.length-1) + '</div>' +
      '<img src="'+ refertChoice[i] +'" style="width:100%">' +
      '</div>';
      console.log(refertChoice[i]);
    }
    $('main').append(slider);
  } else {
    alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto_2)")
  }
});
*/


/*
<div class="carousel" id="carousel-1">
  <!-- Content of carousel 1 -->
  <button class="arrow" data-target="carousel-1">Next</button>
</div>

<div class="carousel" id="carousel-2">
  <!-- Content of carousel 2 -->
  <button class="arrow" data-target="carousel-2">Next</button>
</div>

...

<script>
  function moveCarousel(id) {
    // Code to move the carousel with the given id
  }

  $('.arrow').click(function() {
    var id = $(this).data('target');
    moveCarousel(id);
  });
</script>



/*
//  funzione + per aggiungere elementi
$('.pluss').click(function() {
  var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto 2)");
  if (refertChoice == "referto 1") {
    $('main').append(
      '<div class="element1">Element1</div>'
      );
    } else if (refertChoice == "referto 2") {
      $('main').append(
        '<div class="element2">Element2</div>'
        );
      } else if (refertChoice == "referto 3") {
        $('main').append(
          '<div class="element3">Element3</div>'
          );
        } else if (refertChoice == "referto 4") {
          $('main').append(
            '<div class="element4">Element4</div>'
            );
          } else {
            alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto 2. numero totale referti: xyz)")
          } 
          
        }) 
        */



        