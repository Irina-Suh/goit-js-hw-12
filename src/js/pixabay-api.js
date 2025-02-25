// //key (required) 	str 	Your API key: 48860281-d74be350dbe4d701146d01f08


import axios from 'axios';

const API_KEY = '48860281-d74be350dbe4d701146d01f08'; 
// const baseUrl = "https://pixabay.com";
// const endPoint = "/api";

export async function searchImg(searchName, page, perPage) {
   
 
    const params = new URLSearchParams({
 

      key: API_KEY,
      q: searchName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page : page,
      per_page: perPage,

    });
    const url = `https://pixabay.com/api/?${params}`;
 
    return await axios.get(url)
  // catch(error) {
  //   console.error('Error:', error);
// }
}






