let inputSearch = document.getElementById("inputSearch");
let contentDiv = document.getElementById("contentDiv");
let apiUrl = "https://api.github.com/users/";

async function getData (){
    contentDiv.innerHTML = `
      <div class="spinner">
          <svg viewBox="25 25 50 50">
             <circle r="20" cy="50" cx="50"></circle>
          </svg> 
      </div>
    `
    let promise = await fetch(apiUrl+inputSearch.value)
    let data = await promise.json();
    console.log(data)
    if (data.status === 404){
        contentDiv.innerHTML = "Not Found"   
    }else{
        contentDiv.innerHTML = `
            <div class="profile"><img src="${data.avatar_url}" alt=""></div>
                <div class="details">
                   <div class="basic-inofo">
                    <p>${data.followers} Followers</p>
                    <p>${data.following} following</p>
                    <p>${data.public_repos} Repos</p>
                   </div>
                   <div class="personal-info">
                    <p>Name : ${(data.name) ? data.name : "..."}</p>
                    <p>User : ${(data.login)? data.login : "..."}</p>
                    <p>Bio : ${(data.bio) ? data.bio : "..."}</p>
                  </div>
                <div><a href="${data.html_url}" target="_blank"><button>Visit Profile</button></a></div>
                </div>
        `
    }
} 