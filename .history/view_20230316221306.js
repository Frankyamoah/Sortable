



export const renderHerosView = (data, currentPage = 1,   resultsPerPage = 20  )=>{
  // const resultsPerPageSelect = document.getElementById("results-per-page");
  const parent =  document.querySelector(".hero-body")
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  parent.innerHTML = ""
  const html = data.slice(startIndex, endIndex).reduce((occ, el)=> (occ+= `
  <tr> 
  <td><img src="${el.images?.xs}"></td>
  <td>${el.name}</td>
  <td>${el.biography.fullName}</td>
  <td>${el.powerstats.intelligence}</td>
  <td>${el.powerstats.strength}</td>
  <td>${el.powerstats.speed}</td>
  <td>${el.powerstats.durability}</td>
  <td>${el.powerstats.power}</td>
  <td>${el.appearance.race}</td>
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



export const sortHandler = (data, renderHeros)=>{
const heads = document.querySelector('thead')
const table = document.querySelector('table')
 let resultsPerPageSelect = document.getElementById("results-per-page");

  
heads.addEventListener('click', (e)=>{
if (e.target.classList.contains('sortth')){
  const pagenum =  resultsPerPageSelect.value !== 'All'? +resultsPerPageSelect.value: data.length -1
 const derection = table.dataset.darection
  const quary = e.target.dataset.defersType
  switch (1 < 2){
    case  quary === "name":
       if(+derection === 1){
            renderHeros([...data].sort((a, b)=> a.name - b.name ), 1, pagenum)
            table.dataset.darection = -1
            return
       } else{
        renderHeros([...data].sort((a, b) => (a.name > b.name ? -1 : 1)), 1 ,pagenum)
        table.dataset.darection = 1
       }
      break;
      case  quary === "fullName":
      if(+derection === 1){
        
       const sorted  = [...data].sort((a, b) => a.biography.fullName.localeCompare( b.biography.fullName))
        const  emty = sorted.filter( el => el.biography.fullName === "")
        const notemty = sorted.filter( el => el.biography.fullName)
        console.log(notemty, emty)
        renderHeros( [...notemty, emty], 1, pagenum)
       
        table.dataset.darection = -1
        return
   } else{
    renderHeros([...data].sort((a, b) => (a.biography.fullName>  b.biography.fullName ? -1 : 1)), 1 ,pagenum)
    table.dataset.darection = 1
   }
  break;

  }

}

})



}