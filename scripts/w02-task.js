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
// favouriteFood.forEach(food => {
//     foodElement.innerHTML += `<div>${food}</div>`;
// });
let newFood = "Carrot";
// favouriteFood.push(newFood)
// {
//     foodElement.innerHTML += `<div>${newFood}</div>`;
// }
favouriteFood.shift();
// favouriteFood.forEach(food => {
//     foodElement.innerHTML += `<div>${food}</div>`;
// });
favouriteFood.pop();
favouriteFood.forEach(food => {
    foodElement.innerHTML += `<div>${food}</div>`;
});