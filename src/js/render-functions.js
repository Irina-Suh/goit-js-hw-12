
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');

     const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

 
export function ShowGallery(images, append = false){     //, append = false
 //gallery.innerHTML = '';
    const markup = images.map(image => `
    <li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link">
      
        <img class="li-img"
        src="${image.webformatURL}"
             alt="${image.tags}" />
        <div class="info">
          <p> Likes: <br>${image.likes}</br></p>
          <p> Views: <br>${image.views}</br></p>
          <p>Comments: <br>${image.comments}</br></p>
          <p>Downloads: <br>${image.downloads}</br></p>
        </div>
    </a>
     </li>
  `).join('');
 if (append) {
    gallery.insertAdjacentHTML('beforeend', markup); 
  } else {
    gallery.innerHTML = markup; 
  }
 // gallery.insertAdjacentHTML('beforeend', markup);
 // gallery.innerHTML = markup;
  lightbox.refresh();

}


