



export const renderHerosView = (data, currentPage = 1,   resultsPerPage = 20  )=>{
  // const resultsPerPageSelect = document.getElementById("results-per-page");
  console.log(data)
  const parent =  document.querySelector(".hero-body")
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  parent.innerHTML = ""
  const html = data.slice(startIndex, endIndex).reduce((occ, el)=> (occ+= `
  <tr> 
  <td><img src="${el.images?.xs}"></td>
  <td>${el.name}</td>
  <td>${el.biography?.fullName}</td>
  <td>${el.powerstats?.intelligence}</td>
  <td>${el.powerstats?.strength}</td>
  <td>${el.powerstats?.speed}</td>
  <td>${el.powerstats?.durability}</td>
  <td>${el.powerstats?.power}</td>
  <td>${el.appearance?.race}</td>
  <td>${el.appearance.gender}</td>
  <td>${el.appearance.height}</td>
  <td>${el.appearance.weight}</td>
  <td>${el.biography.placeOfBirth}</td>
  <td>${el.biography.alignment}</td>
  </tr>
  `
    ),'')

    parent.insertAdjacentHTML('beforeend', html)

}


export const resultsPerPageHandlerView = (data, renderHeros)=>{
  const resultsPerPageSelect = document.getElementById("results-per-page");
  resultsPerPageSelect.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const resultsPerPage = selectedValue === "All" ? data.length : parseInt(selectedValue);
    renderHeros(data, 1, resultsPerPage);
  });
}


export const  PaginationBtnsHandlers = (data,  renderHeros)=>{
  let   currentPage = 1
const parent =  document.querySelector('.pagination')
const resultsPerPageSelect = document.getElementById("results-per-page")
const  resultsPerPage = parseInt(resultsPerPageSelect.value)
parent.addEventListener("click", (e) => {
      const  {id} = e.target
      if ( id === 'previous-button' &&   currentPage > 1) {
        currentPage--;
        renderHeros(data, currentPage, resultsPerPage);
        
      }

  if ( id === 'next-button' &&  currentPage < data.length / resultsPerPage) {
    currentPage++;
    renderHeros(data, currentPage, resultsPerPage);
  }
});


}

export const searchViewHandler = (data, renderHeros)=>{
  const searchInput = document.querySelector("[data-search]");
  const resultsPerPageSelect = document.getElementById("results-per-page")
const  resultsPerPage = parseInt(resultsPerPageSelect.value)
  searchInput.addEventListener("input", () => {
    
          currentPage = 1;
          const searchTerm = searchInput.value.trim().toLowerCase();
          filteredData = data.filter((hero) =>
            hero.name.toLowerCase().includes(searchTerm)
          );
          renderHeros( data , 1, resultsPerPage);
        });

}


export const sortHandler = (arr, renderHeros)=>{
  const data = JSON.parse(JSON.stringify(arr))
const heads = document.querySelector('thead')
 let resultsPerPageSelect = document.getElementById("results-per-page");

 const helperPoerstas= (data, derection , quary ,pagenum , e)=>{
  if(+derection === 1){
    renderHeros(data.sort((a,b)=> parseInt( a.powerstats?.[quary])-  parseInt( b.powerstats?.intelligence)), 1, pagenum)
    e.target.dataset.darection  = -1
} else{
renderHeros(data.sort((a,b)=>parseInt( b.powerstats[quary])- parseInt( a.powerstats[quary])), 1 ,pagenum)
e.target.dataset.darection = 1
}
 }
  
heads.addEventListener('click', (e)=>{

if (e.target.classList.contains('sortth')){
  const pagenum =  resultsPerPageSelect.value !== 'All'? +resultsPerPageSelect.value: data.length
 const derection = e.target.dataset.darection
  const quary = e.target.dataset.defersType
  switch (1 < 2){
    case  quary === "name":
       if(+derection === 1){
            renderHeros([...data].sort((a, b)=> a.name.toLowerCase().localeCompare( b.name.toLowerCase())), 1, pagenum)
            e.target.dataset.darection = -1
       } else{
        renderHeros([...data].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()  ? -1 : 1)), 1 ,pagenum)
        e.target.dataset.darection = 1
       }
      break;
      case  quary === "fullName":
      if(+derection === 1){
       const sorted  = [...data].sort((a, b) => a.biography.fullName.toLowerCase().localeCompare( b.biography.fullName.toLowerCase()))
        const  emty = sorted.filter( el => el.biography.fullName === '')
        const notemty = sorted.filter( el => el.biography.fullName  !== "" )
        renderHeros( [...notemty, ...emty], 1, pagenum)
        e.target.dataset.darection  = -1
       
   } else{
    renderHeros([...data].sort((a, b) => (a.biography.fullName.toLowerCase()>  b.biography.fullName.toLowerCase() ? -1 : 1)), 1 ,pagenum)
    e.target.dataset.darection = 1
   }
  break;



  case  quary === "intelligence":
    helperPoerstas(data,derection, "intelligence", pagenum, e)
   break;
   case  quary === "strength":
    helperPoerstas(data,derection, "strength", pagenum, e)
   break;

   case  quary === "speed":
    helperPoerstas(data,derection, "speed", pagenum, e)
   break;
   case  quary === "durability":
    helperPoerstas(data,derection, "durability", pagenum, e)
   break;

   case  quary === "power":
    helperPoerstas(data,derection, "power", pagenum, e)
   break;

   case  quary === "race":
    if(+derection === 1){
      renderHeros([...data].sort((a, b)=> a.appearance.race?.toLowerCase().localeCompare( b.appearance.race?.toLowerCase())), 1, pagenum)
      e.target.dataset.darection = -1
 } else{
  renderHeros([...data].sort((a, b) => (a.appearance.race?.toLowerCase() > b.appearance.race?.toLowerCase()  ? -1 : 1)), 1 ,pagenum)
  e.target.dataset.darection = 1
 } 
   break;

   case  quary === "gender":
   const sorted  = [...data].sort((a, b) => a.appearance.gender.toLowerCase().localeCompare( b.appearance.gender.toLowerCase()))
    const  emty = sorted.filter( el => el.appearance.gender === "-")
    const notemty = sorted.filter( el => el.appearance.gender  !== "-" )
    if(+derection === 1){
      renderHeros( [...notemty, ...emty], 1, pagenum)
      e.target.dataset.darection = -1
 } else{
  renderHeros([...data].sort((a, b) => (a.appearance.gender?.toLowerCase() > b.appearance.gender?.toLowerCase()  ? -1 : 1)), 1 ,pagenum)
  e.target.dataset.darection = 1
 } 
   break
   case  quary === "height":
   if(+derection === 1){
    renderHeros([...data].sort((a, b)=> parseInt( a.appearance.height[1])-  parseInt( b.appearance.height[1]) ), 1, pagenum)
    e.target.dataset.darection = -1
} else{
  renderHeros([...data].sort((a, b)=>  parseInt( b.appearance.height[1]) -  parseInt( a.appearance.height[1]) ), 1, pagenum)
e.target.dataset.darection = 1
}
   break

   case  quary === "weight":
    if(+derection === 1){
      const sorted  = [...data].sort((a, b)=> parseInt( a.appearance.weight[1])-  parseInt( b.appearance.weight[1]) )
      const  emty = sorted.filter( el => !(el.appearance.weight[1].includes("kg")))
      console.log(emty, "emty")
      const notemty = sorted.filter( el => (el.appearance.weight[1].includes('kg')) )

      renderHeros( [...notemty, ...emty], 1, pagenum)
     e.target.dataset.darection = -1
 } else{
   renderHeros([...data].sort((a, b)=>  parseInt( b.appearance.weight[1]) -  parseInt( a.appearance.weight[1]) ), 1, pagenum)
 e.target.dataset.darection = 1
 } 
    break

case quary === "placeOfBirth":
    if(+derection === 1){

       const sorted  = [...data].sort((a, b) => a.biography.placeOfBirth.toLowerCase().localeCompare( b.biography.placeOfBirth.toLowerCase()))
    const  emty = sorted.filter( el => el.biography.placeOfBirth === "-")
    const notemty = sorted.filter( el => el.biography.placeOfBirth  !== "-" )
    
      renderHeros( [...notemty, ...emty], 1, pagenum)
      e.target.dataset.darection = -1
 } else{
  renderHeros([...data].sort((a, b) => (a.biography.placeOfBirth?.toLowerCase() > b.biography.placeOfBirth?.toLowerCase()  ? -1 : 1)), 1 ,pagenum)
  e.target.dataset.darection = 1
 } 


break
case  quary === "alignment":
       if(+derection === 1){
            renderHeros([...data].sort((a, b)=> a.biography.alignment.toLowerCase().localeCompare( b.biography.alignment.toLowerCase())), 1, pagenum)
            e.target.dataset.darection = -1
       } else{
        renderHeros([...data].sort((a, b) => (a.biography.alignment.toLowerCase() > b.biography.alignment.toLowerCase()  ? -1 : 1)), 1 ,pagenum)
        e.target.dataset.darection = 1
       }

 break



  }

}

})



}