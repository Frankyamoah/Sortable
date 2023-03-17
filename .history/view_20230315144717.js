
export const renderHeros = (data)=>{
  const parent =  document.querySelector(".hero-body")
  const html = data.reduce((el, occ)=> (occ+= `
  <tr> 
  
  <td><img src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg"></td>
  </tr>
  
  `
    ),'')

}