document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("image-modal"),t=document.getElementById("modal-image"),n=document.querySelector(".modal-caption"),l=document.getElementById("close-modal");document.querySelectorAll(".gallery-wrapper > div > img").forEach((l=>{l.addEventListener("click",(function(){e.style.display="block",t.src=this.src,t.alt=this.alt,t.srcset=this.srcset,n.innerText=this.alt}))})),l.addEventListener("click",(function(){e.style.display="none"})),e.addEventListener("click",(function(n){n.target!=t&&(e.style.display="none")}))}));