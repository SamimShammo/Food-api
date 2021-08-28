
const getSearchFood = () => {
   const foodInput = document.getElementById('foodInput')
   const foodFeld = foodInput.value;
   foodInput.value= '';
   if(foodFeld == ''){
    
   }
   else{
    // console.log(foodFeld);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodFeld}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => myData(data.meals));
   }



 
   
}
const myData = data => {

    // console.log(data.meals)
    const searchMeal = document.getElementById('search-meal');
    searchMeal.textContent = '';

     if(data.length == 0){
        alert = 'none';
      }
      
        data.forEach(meal => {
        console.log(meal)
         const col = document.createElement('div');
         col.innerHTML = ` 
         <div onclick="geTmealId(${meal.idMeal})" class="card h-100">
           <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text ">${meal.strInstructions.slice(0, 150)}</p>
                  
               </div>
         </div>`;
         searchMeal.appendChild(col)
     });
    
      
 

   }
   const geTmealId = idMeal =>{
       const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
       fetch(url)
       .then(res => res.json())
       .then(data => myNewData(data.meals[0]));


   }
   const myNewData= meal =>{
       console.log(meal);
       const containerdiv =  document.getElementById('newMeal')
       containerdiv.textContent='';
       const div = document.createElement('div')
       div.classList.add('card')
       div.innerHTML = `
         <div class="card ">
           <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                   <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Go YouTube</a>
             </div>
         </div>`;
         containerdiv.appendChild(div)
         containerdiv.value ='';
         
   }