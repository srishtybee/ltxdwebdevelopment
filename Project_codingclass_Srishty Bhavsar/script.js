// Add JavaScript code for your web site here and call it from index.html.
const gallery = document.getElementsByClassName('recipegrid')[0];

//results of amt of cards on page
const resultsrow = document.getElementById('sortresults');
const amtOfResults = (icedMatchaLattes.length);
const sortresulttext = document.createElement('p');
sortresulttext.innerText = "Showing Results For: (" + amtOfResults + ')';
resultsrow.appendChild(sortresulttext);


//console.log(icedMatchaLattes);

icedMatchaLattes.forEach(createRecipeCard);

function createRecipeCard(drink){
    const carddiv = document.createElement('div');
    carddiv.className = 'recipecard';
 
    const drinkName = document.createElement('h2');
    drinkName.textContent = drink.name;
    carddiv.appendChild(drinkName);

    const drinkCafe = document.createElement('h3');
    drinkCafe.textContent = "Cafe Name: 📍" + drink.cafe;
    carddiv.appendChild(drinkCafe);

    const drinkPhoto = document.createElement('img');
    drinkPhoto.className ='recipephoto'
    drinkPhoto.src = drink.imagePath;
    drinkPhoto.alt = drink.name;
    carddiv.appendChild(drinkPhoto);

    const drinkDescription = document.createElement('p');
    drinkDescription.className = 'recipeinfo';
    drinkDescription.textContent = drink.descrip;
    carddiv.appendChild(drinkDescription);

    const recipeButton = document.createElement('button');
    recipeButton.className = 'recipeButtonClick';
    recipeButton.textContent = "Click for Recipe";
    carddiv.appendChild(recipeButton);

    gallery.appendChild(carddiv);
}
