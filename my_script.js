 // User consent to cookie Popups
const storageType = sessionStorage;
const consentPropertyName = 'bff_consent';
    // helper and true and false statements
const shouldShowPopup = () =>  !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  if (shouldShowPopup()){
    const consent = confirm('To offer you a better browsing experience,This site doesnt use cookies. If in the future we do use cookies, this message will be updated we will instruct on how you can change your settings.');
    if (consent) {
          saveToStorage();
    }
  }
}




// creating a slideshow
	var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

