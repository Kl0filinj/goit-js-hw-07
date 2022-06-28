import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const makeGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryMarkup);

// function getCaptionOfImage() {
//   const imageRef = document.querySelector('.gallery__image');

//   //   return `${imageRef.alt}`;
//   //   return event.target();
// }

var newGallery = new SimpleLightbox('.gallery a', {
  //   captionType: 'text',
  //   captionSelector: 'www',
  captionDelay: 250,
});

console.log(getCaptionOfImage());
