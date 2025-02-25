import{S as L,a as w,i as l}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const i=document.querySelector(".gallery"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});function f(a,t=!1){const n=a.map(o=>`
    <li class="gallery-item">
    <a href="${o.largeImageURL}" class="gallery-link">
      
        <img class="li-img"
        src="${o.webformatURL}"
             alt="${o.tags}" />
        <div class="info">
          <p> Likes: <br>${o.likes}</br></p>
          <p> Views: <br>${o.views}</br></p>
          <p>Comments: <br>${o.comments}</br></p>
          <p>Downloads: <br>${o.downloads}</br></p>
        </div>
    </a>
     </li>
  `).join("");t?i.insertAdjacentHTML("beforeend",n):i.innerHTML=n,S.refresh()}const M="48860281-d74be350dbe4d701146d01f08";async function y(a,t,n){const e=`https://pixabay.com/api/?${new URLSearchParams({key:M,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:n})}`;return await w.get(e)}const c=document.querySelector(".js-img-form"),v=document.querySelector(".searchInput"),p=document.querySelector(".wait-msg"),g=document.querySelector(".js-btn-load"),h=document.querySelector(".load-msg"),r={searchName:"",page:1,perPage:40};let u=0;c.addEventListener("submit",async a=>{if(a.preventDefault(),i.innerHTML="",r.searchName=v.value.trim(),r.page=1,!r.searchName){l.error({position:"topRight",title:"Error",message:"Input search string"});return}p.innerHTML='"Wait, the image is loaded" <span class="loader"></span>';try{const t=await y(r.searchName,r.page,r.perPage);u=t.data.totalHits,console.log(`total ${u}`),t.data.hits.length===0?(i.innerHTML="",l.error({close:"true",position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset()):f(t.data.hits),p.textContent="",b()}catch{c.reset(),m(),p.textContent="Ups ...",l.error({close:"true",position:"topRight",title:"Error",message:"Network error. Check internet connection."})}c.reset()});g.addEventListener("click",async a=>{r.page+=1,m(),h.innerHTML='"Wait, loading more images" <span class="loader"></span>';const t=await y(r.searchName,r.page,r.perPage);f(t.data.hits,!0),C(),b(),h.textContent=""});function b(){const a=Math.ceil(u/r.perPage);r.page>=a?(m(),l.show({backgroundColor:"rgba(64, 64, 240, 0.5)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",titleColor:"#fff",titleSize:"16px",message:"We are sorry, but you have reached the end of search results."})):P()}function P(){g.classList.remove("hidden")}function m(){g.classList.add("hidden")}function C(){if(i.firstElementChild){const t=i.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2})}}
//# sourceMappingURL=index.js.map
