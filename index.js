document.addEventListener("DOMContentLoaded", function () {
  let phoneLink = document.querySelector(".phone-link");
  let modal = document.getElementById("phone-modal");

  phoneLink.addEventListener("click", function (event) {
    if (window.innerWidth >= 768) {
      // Seulement sur desktop
      event.preventDefault(); // Empêche l'ouverture de l'app téléphone
      modal.style.display = "flex";
    }
  });

  // Fermer la modale en cliquant en dehors
  window.addEventListener("click", closeModal);
  window.addEventListener("touchstart", closeModal); // Pour les tablettes
  function closeModal(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
});
