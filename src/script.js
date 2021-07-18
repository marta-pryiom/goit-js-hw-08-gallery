import galleryItems from "./app.js";

const galleryContainer = document.querySelector('.js-gallery');
const imageMarkup = createGalleryList(galleryItems);
const lightbox = document.querySelector('.lightbox');
const modal = document.querySelector('.lightbox__content');
const modalImage = document.querySelector('.lightbox__image');
const modalBtn = document.querySelector('[data-action="close-lightbox"]');
const body = document.querySelector('body');
 const backdrop = document.querySelector('.lightbox__overlay')


galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);
    function createGalleryList(galleryItems) {
      return galleryItems
        .map(({ preview, original, description }) => {
          return`
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
    
modalBtn.addEventListener('click', onModalBtnClick);
    function onModalBtnClick(e) {
      lightbox.classList.remove('is-open');
      modalImage.src = '';
      modalImage.alt = '';
      
      window.removeEventListener('keydown', onEscKeyClick);
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

backdrop.addEventListener('click', onLightboxClick);
function onLightboxClick(e) {
  if (e.target === e.currentTarget) {
    console.log('це бекдроп');
    onModalBtnClick();
  }
}
