
export const renderHeros = (data)=>{
  const parent =  document.querySelector(".hero-body")
  const html = data.reduce((el, occ)=> (occ+= `
  <tr> 
  <td><img src="${el.images.xs}"></td>
  td><img src="${el.name}"></td>
  td><img src="${el.biography.fullName}"></td>
  </tr>
  
  `
    ),'')

}