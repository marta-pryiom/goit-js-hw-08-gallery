import { refs } from './refs';
import {
  onGalleryContainerClick,
  onModalBtnClick,
  onLightboxClick,
} from './functions';

refs.galleryContainer.addEventListener('click', onGalleryContainerClick);
refs.modalBtn.addEventListener('click', onModalBtnClick);
refs.backdrop.addEventListener('click', onLightboxClick);
