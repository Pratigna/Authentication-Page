//b5880293bb8b48528677e4d7d4bf5fe3
// Replace 'YOUR_API_KEY' with your actual Spoonacular API key
/*const apiKey = 'b5880293bb8b48528677e4d7d4bf5fe3';

// Function to fetch recipes from Spoonacular API
async function fetchRecipes(query, userData) {
  try {
    // Compile user data and query parameters
    const { weight, height, age, gender } = userData;
    const queryParams = `&query=${query}&weight=${weight}&height=${height}&age=${age}&gender=${gender}`;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}${queryParams}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}


// Function to display recipe details
function displayRecipeDetails(recipe) {
  const recipeDetails = document.querySelector('.recipe-details');
  const recipeDetailsContent = document.querySelector('.recipe-details-content');
  const modal = document.querySelector('.modal');
  // Clear previous content
  recipeDetailsContent.innerHTML = '';

  // Set the recipe name
  const recipeName = document.createElement('h2');
  recipeName.textContent = recipe.title;
  recipeDetailsContent.appendChild(recipeName);

  // Display ingredients
  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.textContent = 'Ingredients:';
  recipeDetailsContent.appendChild(ingredientsTitle);

  const ingredientList = document.createElement('ul');
  recipe.extendedIngredients.forEach((ingredient) => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = `${ingredient.original}`;
    ingredientList.appendChild(ingredientItem);
  });
  recipeDetailsContent.appendChild(ingredientList);

  // Display instructions
  const instructionsTitle = document.createElement('h3');
  instructionsTitle.textContent = 'Instructions:';
  recipeDetailsContent.appendChild(instructionsTitle);

  const instructions = document.createElement('p');
  instructions.textContent = recipe.instructions || 'Instructions not available.';
  recipeDetailsContent.appendChild(instructions);

  // Show the recipe details modal
  recipeDetails.style.display = 'block';
  

 // Add the "Make Recipe" button
  const makeRecipeButton = document.createElement('button');
  makeRecipeButton.textContent = 'Make Recipe';
  makeRecipeButton.classList.add('make-recipe-btn');
  makeRecipeButton.addEventListener('click', () => {
      
    
      
  });
  recipeDetailsContent.appendChild(makeRecipeButton);
  
    // Show the recipe details modal
  recipeDetails.style.display = 'block';
  

  
}



// Function to handle the "View Recipe" button click
function onViewRecipeClick(recipeId) {
  fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      displayRecipeDetails(data);
    })
    .catch((error) => {
      console.error('Error fetching recipe details:', error);
    });
}

// Event listener for the search form
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchQuery = document.querySelector('.searchbox').value;

  const userData = {
    weight: 70, // kg
    height: 170, // cm
    age: 30, // years
    gender: 'male' // 'male' or 'female'
  };

 const recipes = await fetchRecipes(searchQuery, userData);


  const recipeContainer = document.querySelector('.recipe-container');
  recipeContainer.innerHTML = '';

  // Display each recipe
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeCard.appendChild(recipeImage);

    const recipeTitle = document.createElement('h3');
    recipeTitle.textContent = recipe.title;
    recipeCard.appendChild(recipeTitle);

    const viewRecipeButton = document.createElement('button');
    viewRecipeButton.textContent = 'View Recipe';
    viewRecipeButton.addEventListener('click', () => onViewRecipeClick(recipe.id));
    recipeCard.appendChild(viewRecipeButton);

    recipeContainer.appendChild(recipeCard);
  });
});

// Event listener to close the recipe details modal
document.querySelector('.recipe-close-btn').addEventListener('click', () => {
  document.querySelector('.recipe-details').style.display = 'none';
});*/


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

});



const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');



const setupUI = (user) => {
  if(user){
     // Account Information
   const html = `
   <div>Profile Name : ${user.displayName}</div>
   <div>Email : ${user.email}</div>
   `;
   accountDetails.innerHTML= html;
    // toggle Buttons
    loggedInLinks.forEach(item => item.style.display='block');
    loggedOutLinks.forEach(item => item.style.display='none');
  }else{
    // hide account info if not logged in
     accountDetails.innerHTML= '';
    // toggle Buttons
    loggedInLinks.forEach(item => item.style.display='none');
    loggedOutLinks.forEach(item => item.style.display='block');
  }
}




// Event listener for the header-close-btn
document.querySelector('.header-close-btn').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
//   const overlay = document.querySelector("modal-overlay");
//  overlay?.style.setProperty('display','none');
  
}); 

// Event listener for the close button in the signup modal
document.querySelector('#modal-signup .login-header .header-close-btn').addEventListener('click', () => {
 document.querySelector('#modal-signup').style.display = 'none';
 const overlay = document.querySelector('.modal-overlay');
// //  console.log(overlay);
 overlay.style.display = 'none';
});



// Event listener for the close button in the signup modal
document.querySelector('#modal-login .login-header .header-close-btn').addEventListener('click', () => {
  document.querySelector('#modal-login').style.display = 'none';
  const overlay = document.querySelector('.modal-overlay');
 // //  console.log(overlay);
  overlay.style.display = 'none';
});
 
document.addEventListener('DOMContentLoaded', function() {
  const popupBox = document.getElementById('popup-box');
  const questionButton = document.querySelector('.faq');
  const popupCloseBtn = document.querySelector('.popup-close-btn');

  // Show popup box when ? button is clicked
  questionButton.addEventListener('click', function() {
    popupBox.style.display = 'block';
  });

  // Close popup box when close button is clicked
  popupCloseBtn.addEventListener('click', function() {
    popupBox.style.display = 'none';
  });
});









//contact us
document.addEventListener("DOMContentLoaded", function() {
  const contactUsBtn = document.querySelector(".contact-us-btn");
  const contactPopup = document.getElementById("contact-us-popup");
  const closeBtn = document.querySelector(".close-btn");

  // Open the contact popup when the contact us button is clicked
  contactUsBtn.addEventListener("click", function() {
    contactPopup.style.display = "block";
  });

  // Close the contact popup when the close button is clicked
  closeBtn.addEventListener("click", function() {
    contactPopup.style.display = "none";
  });

  // Close the contact popup when the user clicks outside the popup
  window.addEventListener("click", function(event) {
    if (event.target === contactPopup) {
      contactPopup.style.display = "none";
    }
  });
});



//hamburger and togglebtn

// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
