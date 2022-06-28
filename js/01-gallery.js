import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function onGalleryImageClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault();
  const modalFrameOfGallery = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `);
  modalFrameOfGallery.show();

  function closeModalFrameOnEsc(event) {
    console.log('111');
    if (event.code === 'Escape') {
      document.removeEventListener('keydown', closeModalFrameOnEsc);

      modalFrameOfGallery.close();
    }
  }
  if (modalFrameOfGallery.visible() === true) {
    document.addEventListener('keydown', closeModalFrameOnEsc);
  }
}

const makeGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');

galleryContainer.addEventListener('click', onGalleryImageClick);
galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryMarkup);
