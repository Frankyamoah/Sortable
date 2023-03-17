export const state = { data:[]}
export const loadData = () => {
  try{
const res = fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
if(!res.ok){
  throw err('something went wrong')
}

state.data = res

  }catch(err){
    console.log(err)
    throw Error(err.message)
    
  }
  
}