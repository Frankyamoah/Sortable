
export const renderHeros = (data)=>{
  const parent =  document.querySelector(".hero-body")
  const html = data.reduce((el, occ)=> (occ+= `
  
  <tr><td><img src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg"></td><td>A-Bomb</td><td>Richard Milhouse Jones</td><td>38</td><td>100</td><td>17</td><td>80</td><td>24</td><td>Human</td><td>Male</td><td>6'8,203 cm</td><td>980 lb,441 kg</td><td>Scarsdale, Arizona</td><td>good</td></tr>
  `
    ),'')

}