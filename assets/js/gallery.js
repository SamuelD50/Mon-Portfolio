/* Gallery modal */

document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("image-modal");
  let modalImg = document.getElementById("modal-image");
  let modalCaption = document.querySelector(".modal-caption")
  let closeModal = document.getElementById("close-modal");

  document.querySelectorAll(".gallery-wrapper > div > img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modalImg.ariaLabel = this.alt;
      modalImg.srcset = this.srcset;
      modalCaption.innerText = this.alt;

      const dataSizes = this.getAttribute("data-sizes");
      modalImg.setAttribute("sizes", dataSizes)
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target != modalImg) {
      modal.style.display = "none";
    }
  })
});