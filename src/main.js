
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { ShowGallery , gallery } from "./js/render-functions"; 
import { searchImg } from "./js/pixabay-api";

 const form = document.querySelector('.js-img-form');
const input = document.querySelector('.searchInput');
const waitMsg = document.querySelector('.wait-msg');
 const btnLoadMore = document.querySelector('.js-btn-load');
const loadMsg = document.querySelector('.load-msg');

const params = {
  searchName :'',
  page: 1,
  perPage: 40,
}
let total = 0;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
gallery.innerHTML = '';

 // let searchName = input.value.trim();
  params.searchName = input.value.trim();
  params.page = 1;
  if (!params.searchName) {
     
      //  gallery.innerHTML = '';
    iziToast.error ({
      position: "topRight",
      title: 'Error',
      message: 'Input search string'
    });
   
  return
  }

  waitMsg.innerHTML = '"Wait, the image is loaded" <span class="loader"></span>'
  
 try {
  const response = await searchImg (params.searchName, params.page, params.perPage) 
   total = response.data.totalHits;
   console.log(`total ${total}`)
    if (response.data.hits.length === 0) {
      
      gallery.innerHTML = '';
      iziToast.error({
        close: `true`,
        position: "topRight",
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!'
      });
      form.reset();
       
    } else {
      //   gallery.innerHTML = '';   
      ShowGallery(response.data.hits); 
      
    // showLoadMoreBtn()
    }
   waitMsg.textContent = "";
   checkBtnStatus(); 
  }

    catch  (error ) {
      
       form.reset();
        hideLoadMoreBtn();
      waitMsg.textContent = 'Ups ...';
      iziToast.error ({
        close: `true`,
          position: "topRight",
          title: 'Error',
          message: 'Network error. Check internet connection.'
      })
  
    }
    
 
//checkBtnStatus ();
   form.reset();   
     

});


btnLoadMore.addEventListener('click', async (e) => {

 
  params.page += 1;
 // console.log("Поточна сторінка:", params.page);
 

 // checkBtnStatus();
  hideLoadMoreBtn();
  loadMsg.innerHTML = '"Wait, loading more images" <span class="loader"></span>'; 
    const response = await searchImg(params.searchName, params.page, params.perPage)
  
    ShowGallery(response.data.hits, true)
    scroll();   
   checkBtnStatus();
      loadMsg.textContent = "";

})


function checkBtnStatus () {
const maxPage = Math.ceil(total / params.perPage);

  if (params.page >= maxPage) { //total === 0 ||
  
  hideLoadMoreBtn ()
  
  iziToast.show ({
    backgroundColor: 'rgba(64, 64, 240, 0.5)',
     messageColor: `rgba(255, 255, 255, 1)`,
    close: `true`,
    position: "topRight",
    
    titleColor: '#fff',
    titleSize: '16px',
    message: 'We are sorry, but you have reached the end of search results.'
});


} else {
  showLoadMoreBtn ();
}
}


function showLoadMoreBtn() {
 btnLoadMore.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  btnLoadMore.classList.add('hidden');
}

function scroll() {
  if (gallery.firstElementChild) {
    const info = gallery.firstElementChild.getBoundingClientRect();
    const height = info.height;
    scrollBy({
      behavior: 'smooth',
      top: height * 2,
    })
  }
}