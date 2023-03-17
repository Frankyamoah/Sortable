export const state = {}
export const loadData = () => {
  try{
const res = fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
if(!res.ok){
  throw err('something went wrong')
}

  }catch(err){
   
    console.log()
    throw Error(err.message)
    
  }
  
}