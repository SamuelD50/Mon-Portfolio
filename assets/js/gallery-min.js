document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("image-modal"),t=document.getElementById("modal-image"),n=document.querySelector(".modal-caption"),i=document.getElementById("close-modal");document.querySelectorAll(".gallery-wrapper > div > img").forEach((i=>{i.addEventListener("click",(function(){e.style.display="block",t.src=this.src,t.alt=this.alt,t.ariaLabel=this.alt,t.srcset=this.srcset,n.innerText=this.alt;const i=this.getAttribute("data-sizes");t.setAttribute("sizes",i)}))})),i.addEventListener("click",(function(){e.style.display="none"})),e.addEventListener("click",(function(n){n.target!=t&&(e.style.display="none")}))}));