import { refs } from './refs';
import { galleryItems } from './app';

export function onGalleryContainerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  if (e.target.nodeName === 'IMG') {
    console.log(e.target);
    refs.lightbox.classList.add('is-open');
    refs.modalImage.src = e.target.getAttribute('data-source');
    refs.modalImage.alt = e.target.alt;
    refs.body.style.cssText += `  height: 100%;
   width: 100%;
   position: fixed;
   overflow: hidden; `;
  }
  window.addEventListener('keydown', onEscKeyClick);
}

export function onModalBtnClick(e) {
  refs.lightbox.classList.remove('is-open');
  refs.modalImage.src = '';
  refs.modalImage.alt = '';

  window.removeEventListener('keydown', onEscKeyClick);
  // window.removeEventListener('keydown', enterKeyClick);
  refs.body.style.cssText -= `  height: 100%;
   width: 100%;
   position: fixed;
   overflow: hidden; `;
}
export function onEscKeyClick(e) {
  // console.log(e);
  if (e.code === 'Escape') {
    onModalBtnClick();
  }
}

export function enterKeyClick(e) {
  console.log('enter');
  console.log(e.target);
  if (e.code === 'Enter' && e.target.nodeName === 'A') {
    refs.lightbox.classList.add('is-open');
    refs.modalImage.src = e.target.href;
    refs.body.style.cssText += `  height: 100%;
   width: 100%;
   position: fixed;
   overflow: hidden; `;
  }
}
window.addEventListener('keydown', enterKeyClick);
export function onLightboxClick(e) {
  if (e.target === e.currentTarget) {
    // console.log('це бекдроп');
    onModalBtnClick();
  }
}
