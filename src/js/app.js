// carica documento html prima
$(document).ready(function() {
  
  console.log("test link succesfull"); 
  
  // funzione + per aggiungere elementi
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

  //funzione - per cancellare elementi
  $('.minus').click(function() {
    var elements = $('main .mySlides');
    if (elements.length > 0) {
      elements.last().remove();
    }
  });

  //#region archivio immagini
    var referto_1 = ['assets/img/carosello1/img1.jpg', 'assets/img/carosello1/img2.jpg', 'assets/img/carosello1/img3.jpg'];
    var referto_2 = ['assets/img/carosello2/img4.jpg', 'assets/img/carosello2/img5.jpg', 'assets/img/carosello2/img6.jpg', 'assets/img/carosello2/img7.jpg', 'assets/img/carosello2/img8.jpg'];
    var referto_3 = ['assets/img/carosello3/img9.jpg', 'assets/img/carosello3/img10.jpg', 'assets/img/carosello3/img11.jpg', 'assets/img/carosello3/img12.jpg'];
    var referto_4 = ['assets/img/carosello4/img13.jpg', 'assets/img/carosello4/img14.jpg', 'assets/img/carosello4/img15.jpg', 'assets/img/carosello4/img16.jpg', 'assets/img/carosello4/img17.jpg', 'assets/img/carosello4/img18.jpg'];
  //#endregion

  let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

});


/*
$('.pluss').click(function() {
  var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto_2)");
  console.log(refertChoice[3]);
  if (
    refertChoice == "referto_1" || 
    refertChoice == "referto_2" || 
    refertChoice == "referto_3" || 
    refertChoice == "referto_4"
    ) {
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

  // funzione + per aggiungere elementi
  // $('.pluss').click(function() {
  //   var refertChoice = prompt("Scegliere fra il referto 1, 2, 3, 4 (es. referto_2)");
  //   if (refertChoice == "referto_1") {
  //     $('main').append(
  //       '<div class="element1">Element1</div>'
  //     );
  //   } else if (refertChoice == "referto_2") {
  //     $('main').append(
  //       '<div class="element2">Element2</div>'
  //     );
  //   } else if (refertChoice == "referto_3") {
  //     $('main').append(
  //       '<div class="element3">Element3</div>'
  //     );
  //   } else if (refertChoice == "referto_4") {
  //     $('main').append(
  //       '<div class="element4">Element4</div>'
  //     );
  //   } else {
  //     alert("Il valore inserito non è corretto, si prega di riprovare inserendo il valore corretto (es. referto 2)")
  //   }  
  // });


 