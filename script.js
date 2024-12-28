// ************** Pour le dark mode *********************************
let switchInput = document.getElementById("flexSwitchCheckChecked");
let label = document.querySelector(".form-check-label");
let body = document.body;

// Gestion de l'événement sur le switch
switchInput.addEventListener("change", () => {
  if (switchInput.checked) {
    body.classList.remove("dark-mode");
    // label.textContent = "Mode Clair";
  } else {
    body.classList.add("dark-mode");
    // label.textContent = "Mode Sombre";
  }
});

// **************************** pour le scroll barre ***********************
window.addEventListener("scroll", () => {
  let progressBar = document.querySelector(".progress-bar");
  let scrollTop = window.scrollY; // Distance défilée depuis le haut
  let docHeight = document.documentElement.scrollHeight - window.innerHeight; // Hauteur du document
  let scrollPercent = (scrollTop / docHeight) * 100; // Pourcentage de défilement

  progressBar.style.width = scrollPercent + "%"; // Met à jour la largeur
});

// ************************** pour le bouton abonnez-vous *******************************
// Pour selectionner le bouton
let boutonAbonner = document.getElementById("bouton-AV");

// boutonAbonner.addEventListener("click", () => {
//   boutonAbonner.innerHTML = 'Abonné <i class="bi bi-check"></i>'; // afficher "abonné" et ajouter une icone bootsrap
// });
boutonAbonner.addEventListener("click", () => {
  //  faire une condition
  if (boutonAbonner.innerHTML.includes("Abonné")) {
    boutonAbonner.innerHTML = "Abonnez-vous";
  } else {
    boutonAbonner.innerHTML = 'Abonné <i class="bi bi-check"></i>';
  }
});

// ********************************* pour la Carrousel ***************************
// Sélectionner les éléments de la carousel
let carousel = document.querySelector("#carouselExample");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let playBtn = document.getElementById("playBtn");

// Contrôler le défilement manuel avec les icônes
prevBtn.addEventListener("click", () => {
  let carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.prev(); // Aller à l'élément précédent
});

nextBtn.addEventListener("click", () => {
  let carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.next(); // Aller à l'élément suivant
});

// Animation de lecture automatique avec l'icône play
let autoPlayInterval;

playBtn.addEventListener("click", () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval); // Si l'auto-play est déjà actif, l'arrêter
    playBtn.classList.remove("text-danger");
    playBtn.classList.add("text-white");
  } else {
    autoPlayInterval = setInterval(() => {
      const carouselInstance = new bootstrap.Carousel(carousel);
      carouselInstance.next(); // Avancer à l'élément suivant
    }, 2000); // Changer d'image toutes les 2 secondes

    playBtn.classList.remove("text-white");
    playBtn.classList.add("text-danger"); // Changer la couleur de l'icône pour indiquer l'état "pause"
  }
});
