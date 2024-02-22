/* Gallery modal */

document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("image-modal");
    let modalImg = document.getElementById("modal-image");
    let modalCaption = document.querySelector(".modal-caption")
    let closeModal = document.getElementById("close-modal");

    document.querySelectorAll(".gallery-wrapper > div > img").forEach((img) => {
      img.addEventListener("click", function (event) {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalCaption.innerText = this.alt;
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
      if (event.target != modalImg) {
        modal.style.display = "none";
      }
    })
});


/* Filters */

document.addEventListener("DOMContentLoaded", function () {
    filterGallery("all");

    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        filterGallery(filterValue);
      });
    });

    function filterGallery(filter) {
      const galleryItems = document.querySelectorAll(".gallery-wrapper div");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
});