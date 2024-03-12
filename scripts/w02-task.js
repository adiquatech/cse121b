/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Quadri Kolawole";
let currentYear = "2024";
let profilePicture = "images/profilePic.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.getElementById("year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favouriteFood = ["Apple", "Watermelon", "Cucumber", "Rice", "Beans"];
foodElement.innerHTML += `<br>${favouriteFood}`;

let newFood = "Carrot";
favouriteFood.push(newFood);
foodElement.innerHTML += `<br>${favouriteFood}`;

favouriteFood.shift();
foodElement.innerHTML += `<br>${favouriteFood}`;

favouriteFood.pop();
foodElement.innerHTML += `<br>${favouriteFood}`;
