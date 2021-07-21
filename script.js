import galleryItems from "./app.js";

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');
const modalBtn = document.querySelector('[data-action="close-lightbox"]');
const body = document.querySelector('body');
const backdrop = document.querySelector('.lightbox__overlay')
    

    
function createGalleryList() {
      return galleryItems.map(({ preview, original, description }) => {
          return `
          <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
          </li>
        `;
        })
        .join('');
      
    };
galleryContainer.insertAdjacentHTML('beforeend', createGalleryList());

galleryContainer.addEventListener('click', onGalleryContainerClick);

    function onGalleryContainerClick(e) {
      e.preventDefault();
      if (e.target.nodeName !== 'IMG') {
        return;
      }
      if(e.target.nodeName === 'IMG'){
      console.log(e.target);
      lightbox.classList.add('is-open');
      modalImage.src = e.target.getAttribute('data-source');
        modalImage.alt = e.target.alt;
        body.style.cssText +=`  height: 100%;
   width: 100%;
   position: fixed;
   overflow: hidden; `
      }
      window.addEventListener("keydown", onEscKeyClick);
     
      
    }
 window.addEventListener("keydown", enterKeyClick);
modalBtn.addEventListener('click', onModalBtnClick);
    function onModalBtnClick(e) {
      lightbox.classList.remove('is-open');
      modalImage.src = '';
      modalImage.alt = '';
      
      window.removeEventListener('keydown', onEscKeyClick);
      window.removeEventListener("keydown", enterKeyClick);
      body.style.cssText -=`  height: 100%;
   width: 100%;
   position: fixed;
   overflow: hidden; `
      
    }

function onEscKeyClick(e) {
console.log(e)
      if (e.code === "Escape") {
        onModalBtnClick();
      }
}
function enterKeyClick(e) {
  console.log('enter');
  if (e.code === "Enter") {
    onGalleryContainerClick();
  }
}

backdrop.addEventListener('click', onLightboxClick);
function onLightboxClick(e) {
  if (e.target === e.currentTarget) {
    console.log('це бекдроп');
    onModalBtnClick();
  }
}

