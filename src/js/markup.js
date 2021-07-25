import { refs } from './refs';
import { galleryItems } from './app';
export function createGalleryList() {
  return galleryItems
    .map(({ preview, original, description }) => {
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
}
refs.galleryContainer.insertAdjacentHTML('beforeend', createGalleryList());
