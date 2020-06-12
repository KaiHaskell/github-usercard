/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/KaiHaskell")
  .then((response) => {
    console.log(response);
    let gitCard = gitCreateCard(response);
    const cards = document.querySelector(".cards");
    cards.appendChild(gitCard);
  })
  .catch((error) => {
    console.log(error);
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

const followersArray = [
  "AndrewMaddocks",
  "ackers93",
  "hail91",
  "emilybruner",
  "vtellez1",
];

followersArray.forEach((coolPeople) => {
  axios
    .get(`https://api.github.com/users/${coolPeople}`)
    .then((response) => {
      let gitCard = gitCreateCard(response);
      const cards = document.querySelector(".cards");
      cards.appendChild(gitCard);
      gitCreateCard(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function gitCreateCard(banana) {
  //creating the layout of the card div
  const gitCard = document.createElement("div");
  const gitPFP = document.createElement("img");
  const gitCardInfo = document.createElement("div");
  const gitName = document.createElement("h3");
  const gitUsername = document.createElement("p");
  const gitLocation = document.createElement("p");
  const gitProfile = document.createElement("p");
  const gitProfileA = document.createElement("a");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const gitBio = document.createElement("p");

  //Adding classes to the appropriate elements
  gitCard.classList.add("card");
  gitCardInfo.classList.add("card-info");
  gitName.classList.add("name");
  gitUsername.classList.add("username");

  //appending all the elements
  gitCard.appendChild(gitPFP);
  gitCard.appendChild(gitCardInfo);
  gitCardInfo.appendChild(gitName);
  gitCardInfo.appendChild(gitUsername);
  gitCardInfo.appendChild(gitLocation);
  gitCardInfo.appendChild(gitProfile);
  gitProfile.appendChild(gitProfileA);
  gitCardInfo.appendChild(gitFollowers);
  gitCardInfo.appendChild(gitFollowers);
  gitCardInfo.appendChild(gitBio);

  //Text Content for my elements
  gitPFP.src = banana.data.avatar_url;
  gitName.textContent = banana.data.name;
  gitUsername.textContent = banana.data.login;
  gitLocation.textContent = `Location: ${banana.data.location}`;

  gitProfileA.href = banana.data.html_url;
  gitProfileA.textContent = banana.data.html_url;
  gitFollowers.textContent = `Followers: ${banana.data.followers}`;
  gitFollowing.textContent = `Following: ${banana.data.following}`;
  gitBio.textContent = `Bio: ${banana.data.bio}`;

  //Event listeners
  gitPFP.addEventListener("click", () => {
    let hellbus = new Audio("audio/hellbus.mp3");
    hellbus.loop = false;
    hellbus.volume = 0.5;
    hellbus.play();
  });

  return gitCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/*
let myGitProfile = {
  avatar_url: "https://avatars1.githubusercontent.com/u/31229627?v=4",
  bio: "i only have one good pfp that i use for everything ",
  blog: "kaihaskell.com",
  company: "N/A",
  created_at: "2017-08-22T02:05:37Z",
  email: null,
  events_url: "https://api.github.com/users/KaiHaskell/events{/privacy}",
  followers: 23,
  followers_url: "https://api.github.com/users/KaiHaskell/followers",
  following: 16,
  following_url:
    "https://api.github.com/users/KaiHaskell/following{/other_user}",
  gists_url: "https://api.github.com/users/KaiHaskell/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/KaiHaskell",
  id: 31229627,
  location: "SC, USA",
  login: "KaiHaskell",
  name: "Kai",
  node_id: "MDQ6VXNlcjMxMjI5NjI3",
  organizations_url: "https://api.github.com/users/KaiHaskell/orgs",
  public_gists: 0,
  public_repos: 19,
  received_events_url:
    "https://api.github.com/users/KaiHaskell/received_events",
  repos_url: "https://api.github.com/users/KaiHaskell/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/KaiHaskell/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/KaiHaskell/subscriptions",
  type: "User",
  updated_at: "2019-10-31T20:46:38Z",
  url: "https://api.github.com/users/KaiHaskell"
};
*/
