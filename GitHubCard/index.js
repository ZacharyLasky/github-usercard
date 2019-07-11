/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/ZacharyLasky")
  .then(data => {
    console.log("DATA:", data);
    cards.appendChild();
  })
  .catch(error => {
    console.log("ERROR:", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

// // Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

function cardsComponent(obj) {
  //SELECT
  let card = document.createElement("div");
  let userImg = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let userName = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let aTags = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  //PUT TOGETHER
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(aTags);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //STYLE
  card.classList.add(".card");
  name.classList.add(".name");
  userName.classList.add(".username");
  userName.classList.add("p");
  location.classList.add("p");
  profile.classList.add("p");
  followers.classList.add("p");
  following.classList.add("p");
  bio.classList.add("p");

  //CONTENT
  userImg.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = "Profile";
  aTags.href = obj.html_url;
  aTags.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;
}

// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
