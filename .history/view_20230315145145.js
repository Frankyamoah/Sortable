
export const renderHeros = (data)=>{
  const parent =  document.querySelector(".hero-body")
  imageCell.innerHTML = `<img src="${hero.images.xs}" />`;
    nameCell.innerHTML = hero.name;
    fullNameCell.innerHTML = hero.biography.fullName;
    intelligenceCell.innerHTML = hero.powerstats.intelligence;
    strengthCell.innerHTML = hero.powerstats.strength;
    speedCell.innerHTML = hero.powerstats.speed;
    durabilityCell.innerHTML = hero.powerstats.durability;
    powerCell.innerHTML = hero.powerstats.power;
    raceCell.innerHTML = hero.appearance.race;
    genderCell.innerHTML = hero.appearance.gender;
    heightCell.innerHTML = hero.appearance.height;
    weightCell.innerHTML = hero.appearance.weight;
    placeOfBirthCell.innerHTML = hero.biography.placeOfBirth;
    alignmentCell.innerHTML = hero.biography.alignment;
  const html = data.reduce((el, occ)=> (occ+= `
  <tr> 
  <td><img src="${el.images.xs}"></td>
  <td>${el.name}</td>
  <td> </td>
  </tr>
  
  `
    ),'')

}