let key = "ZOuRKwhTTnw4VjRGFHTL6RbL1eaffn1G"

document.addEventListener("DOMContentLoaded",()=> {
   let form =  document.querySelector('form')
   let content = document.querySelector('.content')
   let select = document.querySelector('select')
   let input = document.querySelector('#userInput')
   let submit = document.querySelector('#submit')
   let limit = 10
   let search = 'pie'

   let h1 = document.createElement('h1')

form.addEventListener("sunbit",() =>{
    giphySearch(search, limit)
})

   const giphySearch = async (userInput,userLimit) =>{
       try {
           let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
           console.log(res);
           
       } catch (error) {
           console.log(error);
           
       }
        
   }
  
   const populateSelect = () =>{
       for(let i = 1; i <= 25; i++){
           let option = document.createElement('option')
           option.innerText = i
           option.value = i
        select.appendChild(option)
       }


   }
   populateSelect()
})