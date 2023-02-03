//#region archivio immagini
var referto = {
  mario: ['assets/img/carosello1/img1.jpg', 'assets/img/carosello1/img2.jpg', 'assets/img/carosello1/img3.jpg'],
  pippo: ['assets/img/carosello2/img4.jpg', 'assets/img/carosello2/img5.jpg', 'assets/img/carosello2/img6.jpg', 'assets/img/carosello2/img7.jpg', 'assets/img/carosello2/img8.jpg'],
  gino: ['assets/img/carosello3/img9.jpg', 'assets/img/carosello3/img10.jpg', 'assets/img/carosello3/img11.jpg', 'assets/img/carosello3/img12.jpg'],
  pino: ['assets/img/carosello4/img13.jpg', 'assets/img/carosello4/img14.jpg', 'assets/img/carosello4/img15.jpg', 'assets/img/carosello4/img16.jpg', 'assets/img/carosello4/img17.jpg', 'assets/img/carosello4/img18.jpg'],
}
// array nomi referti
var nomiReferti = Object.keys(referto);
//#endregion



// definisco l'indice di controllo per le slide
var currentSlide = 1;


// CANCELLAZIONE elementi
$('.minus').click(function() {
  var elements = $('main section');
  if (elements.length > 0) {
    elements.last().remove();
  }
});


// SCELGO e GENERO referto
$('.pluss').click(function() {
  choseReferto = prompt("Sono disponibili i referti di: "+nomiReferti+". Digitare il nome interessato in minuscolo (es. giacomo)")
  if (nomiReferti.includes(choseReferto)) {
    var section = `
    <section class="${choseReferto}">
      <div class="slideControls">
        <div class="prev" onclick="sliderMover(\'retreat\')">&#10094;</div>
        <div class="dots ${choseReferto}" style="text-align:center"></div>
        <div class="next" onclick="sliderMover(\'advance\')">&#10095;</div>
      </div>
      <div class="mySlides fade ${choseReferto}"></div>
    </section>`

    // QUI IL TAG PRINCIPALE IN CUI SI APPENDE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    $('main').append(section);
    
    $(`.mySlides.${choseReferto}`).empty();
    var element = `
      <div class="numbertext">${currentSlide}/${referto[choseReferto].length}</div>
      <img src="${referto[choseReferto][currentSlide-1]}">`
    $(`.mySlides.${choseReferto}`).append(element);

    // genero i dot in numero uguale alla lunghezza dell'array desiderato
    for (let index = 0; index < referto[choseReferto].length; index++) {
      var dotsDeploy = `
        <span class="dot" onclick="dotSelect(${index})"></span>`
      ;
      if ($(`.dots.${choseReferto}`)) { 
        $(`.dots.${choseReferto}`).append(dotsDeploy);
      }
    }
    // raggruppo tutti i dot in un array. non vuole ne var ne let per uscire dallo scope
    dots = $(".dot");
    aggiornaDot()

  } else {
    alert("il fascicolo di "+choseReferto+" non è incluso, perfavore scegliere fra "+nomiReferti)
  }
})

// FRECCE SCORRI IMMAGINE
function sliderMover(direction) {
  // va messo fuori: var currentSlide = 1; // contatore di posizione
  if (direction == 'advance') {
    if (currentSlide==referto[choseReferto].length) {
      currentSlide = 1
    } else {
      currentSlide =currentSlide +1
    }
    aggiornaImmagine()
    aggiornaDot()
  } else if (direction == 'retreat') {
    if (currentSlide==1) {
      currentSlide=referto[choseReferto].length
    } else {
      currentSlide=currentSlide -1
    }
    aggiornaImmagine()
    aggiornaDot()
  }
}

// cambio immagine al click sul dot e il colore del dot
function dotSelect(parametro) {
  currentSlide = parametro +1
  aggiornaImmagine()
  aggiornaDot()
}


// creazione e l'aggiornamento delle immagini nell'html
function aggiornaImmagine() {
  $('.mySlides').empty();
  var element = 
  '<div class="numbertext">'+ currentSlide +'/'+ referto[choseReferto].length +'</div>'+
  '<img src="'+ referto[choseReferto][currentSlide-1] +'">'
  $('.mySlides').append(element);
}

// aggiungo il colore del dot selezionato
function aggiornaDot() {
  for (let index = 0; index < referto[choseReferto].length; index++) {
    dots[index].classList.remove("active")
  }
  var dotPoition = currentSlide - 1
  dots[dotPoition].classList.add("active");
}



