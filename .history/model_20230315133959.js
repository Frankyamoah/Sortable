export const state = { data:[]}
export const loadData = async () => {
  try{
const res = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
if(!res.ok){
  throw err('something went wrong')
}
const data = await res.json()
// state.data =  [...data]

  }catch(err){
    console.log(err)
    throw Error(err.message)
    
  }
  
}