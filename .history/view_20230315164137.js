
export const renderHerosView = (data, currentPage = 1,   resultsPerPage = 20  )=>{
  const parent =  document.querySelector(".hero-body")
  parent.innerHTML = ""
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  console.log(data.slice(startIndex, endIndex).length)
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
  <td> </td>
  </tr>
  `
    ),'')

    parent.insertAdjacentHTML('beforeend', html)

}


export const resultsPerPageHandlerView = (data, renderHeros)=>{
  const resultsPerPageSelect = document.getElementById("results-per-page");
  resultsPerPageSelect.addEventListener("change", (e) => {
    console.log(data)
    const selectedValue = e.target.value;
    const resultsPerPage = selectedValue === "All" ? data.length : parseInt(selectedValue);
    renderHeros(data, 1, resultsPerPage);
  });
}