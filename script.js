const val = document.querySelector('.input');
const btn = document.querySelector('.btn');
const loading = document.querySelector('.loading');
let flex = document.querySelector('.flex');

let isLoading = false;

btn.addEventListener('click',async(e) => {
  e.preventDefault();
  isLoading = true;
  try{
    flex.innerHTML = '';    
    loading.innerText = 'Loading...'
    const data = await fetch(`https://api.disneyapi.dev/character?name=${val.value}`);
    const res = await data.json();
    isLoading = false;
    if(!isLoading){
      loading.innerText = ''
    }
    if(res.data.length === 0){
      alert(`result for ${val.value} not found`);
    }
    res.data.forEach(element => {
      flex.innerHTML += `<div class="card">
      <img src=${element.imageUrl} alt="" class="img">
      <h2 class="name">Name: ${element.name}</h2> 
      <a href=${element.sourceUrl} target="_blank" class="link">view Details</a> 
    </div>`
    });
    val.value = '';
  } catch(e){
    alert(e);
    isLoading = false;
  }
 
})
