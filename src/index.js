import { galleryItems } from './js/app.js';
import { refs } from './js/refs';
import * as createGalleryList from './js/markup';
import * as functions from './js/functions';
import * as listeners from './js/listeners';

// refs.galleryContainer.insertAdjacentHTML('beforeend', createGalleryList());

// refs.galleryContainer.addEventListener('click', onGalleryContainerClick);

//   function onGalleryContainerClick(e) {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
//       return;
//     }
//     if(e.target.nodeName === 'IMG'){
//     console.log(e.target);
//   refs.lightbox.classList.add('is-open');
//   refs.modalImage.src = e.target.getAttribute('data-source');
//   refs.modalImage.alt = e.target.alt;
//   refs.body.style.cssText +=`  height: 100%;
//  width: 100%;
//  position: fixed;
//  overflow: hidden; `
//     }
//     window.addEventListener("keydown", onEscKeyClick);

//   }
//  window.addEventListener("keydown", enterKeyClick);

// refs.modalBtn.addEventListener('click', onModalBtnClick);
//   function onModalBtnClick(e) {
//   refs.lightbox.classList.remove('is-open');
//   refs.modalImage.src = '';
//   refs.modalImage.alt = '';

//     // window.removeEventListener('keydown', onEscKeyClick);
//     // window.removeEventListener("keydown", enterKeyClick);
//   refs.body.style.cssText -=`  height: 100%;
//  width: 100%;
//  position: fixed;
//  overflow: hidden; `

//   }

// function onEscKeyClick(e) {
// console.log(e)
//       if (e.code === "Escape") {
//         onModalBtnClick();
//       }
// }
// function enterKeyClick(e) {
//   console.log("enter");
//   console.log(e.target);
//   if (e.code === "Enter" && e.target.nodeName === "A") {
//     refs.lightbox.classList.add("is-open");
//     refs.modalImage.src = e.target.href;
//     refs.body.style.cssText += `  height: 100%;
//    width: 100%;
//    position: fixed;
//    overflow: hidden; `;
//   }
// }
// refs.backdrop.addEventListener('click', onLightboxClick);
// function onLightboxClick(e) {
//   if (e.target === e.currentTarget) {
//     console.log('це бекдроп');
//     onModalBtnClick();
//   }
// }
