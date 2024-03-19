/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Quadri Kolawole Adisa",
    photo: "images/profilePic.jpg",
    favouriteFood: ["Apple", "Watermelon", "Cucumber", "Rice", "Beans"],
    hobbies: ["Football", "Mobile Stimulator Games", "Reading"],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Ondo State, Nigeria",
        length: "12 year"
    },

    {
        place: "Ibadan, Nigeria",
        length: "8 year"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.photo);


/* Favorite Foods List*/
myProfile.favouriteFood.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);

});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
}
);


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    let dlElement = document.getElementById("places-lived");
    dlElement.appendChild(dt);
    dlElement.appendChild(dd);
});

