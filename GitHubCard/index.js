import "regenerator-runtime/runtime";
import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const getUserData = async (username) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.github.com/users/${username}`,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const user = getUserData(`ncluff003`);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [`tetondan`, `dustinmyers`, `justsml`, `luishrd`, `bigknell`];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

async function createGitHubCard(userObj) {
  const user = await userObj;

  const userCard = document.createElement("div");
  userCard.classList.add("card");

  const userImage = document.createElement("img");
  userImage.src = user.avatar_url;
  userCard.appendChild(userImage);

  const userInfo = document.createElement("div");
  userInfo.classList.add("card-info");
  userCard.appendChild(userInfo);

  const userFullName = document.createElement("h3");
  userFullName.classList.add("name");
  userFullName.textContent = user.name;
  userInfo.appendChild(userFullName);

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = user.login;
  userInfo.appendChild(username);

  const userLocation = document.createElement("p");
  let location = user.location;
  userLocation.textContent = `Location: ${location}`;
  userInfo.appendChild(userLocation);

  const userPageUrl = document.createElement("p");
  userPageUrl.textContent = `Profile: `;
  userInfo.appendChild(userPageUrl);

  const userPageUrlLink = document.createElement("a");
  userPageUrlLink.href = user.url;
  userPageUrlLink.textContent = `${user.url}`;
  userPageUrl.appendChild(userPageUrlLink);

  const userFollowers = document.createElement("p");
  userFollowers.textContent = `Followers: ${user.followers}`;
  userInfo.appendChild(userFollowers);

  const userFollowing = document.createElement("p");
  userFollowing.textContent = `Following: ${user.following}`;
  userInfo.appendChild(userFollowing);

  const userBio = document.createElement("p");
  userBio.textContent = `Bio: ${user.bio}`;
  userInfo.appendChild(userBio);

  const container = document.querySelector(".cards");

  container.appendChild(userCard);
}

createGitHubCard(user);
followersArray.forEach((follower) => createGitHubCard(getUserData(follower)));

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
