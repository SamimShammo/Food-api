
const loadSpinner = (displayStyle) =>{
  const spinner = document.getElementById('spinner');
  spinner.style.display = displayStyle;
}


const getSearchFood = () => {
   const foodInput = document.getElementById('foodInput')
   const foodFeld = foodInput.value;
   loadSpinner('block')
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
    const noResult = document.getElementById('resultNot')
   
     if(!data){
      noResult.style.display = 'block';
      noResult.style.marginTop = '100px';
        console.log('result')
      }
      
        else{
         data.forEach(meal => {
            console.log(meal)
             const col = document.createElement('div');
             col.innerHTML = ` 
             <div onclick="geTmealId('${meal.idMeal}')" class="card h-100">
               <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                   <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text ">${meal.strInstructions.slice(0, 150)}</p>
                      
                   </div>
             </div>`;
             searchMeal.appendChild(col)
             loadSpinner('none')
            });
        }
    
    
      
 

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





















//    const getSports = () => {
//     const sportInput = document.getElementById('sportInput');
//     const sports = sportInput.value;
//     sportInput.textContent =''
//     console.log(sports);
//     // if (sports == 0) {

//     // } else {
//         const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${sports}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => sportTeam(data.teams))

//     // }
//     sportInput.value = '';
// }
// // getSports();
// const sportTeam = data => {
//     // console.log(data.teams[0])
//     // const datas = data.teams[0];
//     // console.log(sports);
//     const sportsDb = document.getElementById('sportsDb');
//     sportsDb.textContent = '';
//     data.forEach(datar => {
//         const div = document.createElement('div')
//         div.classList.add('styleSport')
//         div.innerHTML = `
//         <div onclick="getTeamId(${datar.idTeam})" class="card" style="width: 18rem;">
//             <img src="${datar.strTeamBadge}" class="card-img-top" alt="">
//             <div class="card-body">
//                 <h5 class="card-title">${datar.strTeam}</h5>
//                 <p class="card-text">${datar.strStadiumDescription.slice(0, 100)}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>`;
//         sportsDb.appendChild(div)

//     });

// }
// // const getTeamId = (idTeam) => {
// //     // console.log(idTeam)
// //   const  url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
// //     fetch(url)
// //     .then(res => res.json())
// //     .then(data => getId(data.teams[0]))
// // }

// // const getId = team => {
// //     console.log(team)
// // }