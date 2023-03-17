
export const renderHeros = (data)=>{
  const parent =  document.querySelector(".hero-body")
  const html = data.reduce((el, occ)=> (occ+= `
  <tr> 
  <td><img src="${el.images.xs}"></td>
  <td>${el.name}</td>
  <td> </td>
  </tr>
  
  `
    ),'')

}