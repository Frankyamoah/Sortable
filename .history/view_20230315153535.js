
export const renderHeros = (data, )=>{
  const parent =  document.querySelector(".hero-body")
  parent.innerHTML = ""

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  const html = data.reduce((el, occ)=> (occ+= `
  <tr> 
  <td><img src="${el.images.xs}"></td>
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
  <td> </td>
  </tr>
  
  `
    ),'')

    parent.insertAdjacentHTML('beforeend', html)

}