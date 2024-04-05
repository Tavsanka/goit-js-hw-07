import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("ul.gallery");
for (const item of galleryItems) {
  const html = `<ul class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </ul>`;
  gallery.insertAdjacentHTML("beforeend", html);
}

const lightbox = new SimpleLightbox(".gallery a");

console.log(galleryItems);
