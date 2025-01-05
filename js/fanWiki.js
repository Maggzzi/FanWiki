//ik heb een externe bron gebruikt voor het verstuurt worden naar een ander pagina(bestand)
//de bron: https://stackoverflow.com/questions/7077770/window-location-href-and-window-open-methods-in-javascript
//getElementByID en de eventlistener heb ik op canvas geleerd bij de Javascript modulen

let divHomepage = document.getElementById("HomePage");
divHomepage.addEventListener('click', function () {
    window.location.href = 'verbeterdeIndex.html';
});

let divIntro = document.getElementById("Intro");
divIntro.addEventListener('click', function () {
    window.location.href = 'introduction.html';
});

let divKarakters = document.getElementById("Characters");
divKarakters.addEventListener('click', function () {
    window.location.href = 'karakters.html';
});

let divGallery = document.getElementById("Gallery");
divGallery.addEventListener('click', function () {
    window.location.href = 'Gallery.html';
});

let divAboutMe = document.getElementById("AboutMe");
divAboutMe.addEventListener('click', function () {
    window.location.href = 'about.html';
});

let divContact = document.getElementById("Contact");
divContact.addEventListener('click', function () {
    window.location.href = 'contact.html';
});