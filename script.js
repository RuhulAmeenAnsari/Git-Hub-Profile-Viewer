let user = document.querySelector("#user");
let search = document.querySelector("#searchbtn")

search.addEventListener('click', () => {
    let userValue = user.value
    console.log(userValue);
    fetchUser(userValue)
})

async function fetchUser(username) {
    let API = `https://api.github.com/users/${username}`
    let result = (await (await fetch(API)).json())
    console.log(result);
    const { avatar_url, name, bio, followers, following, public_repos } = result
    document.querySelector(".container").innerHTML =
        ` 
            <div class="left">
                <div class="image"><img src = "${avatar_url}  "></div>
                <div class="about">
                    <h4>${name === null ? " " : name}</h4>
                    <p>${bio === null ? " " : bio}</p>
                </div>
            </div>
            <div class="right">
                <div class="topright">
                    <div class="follower">
                        <div class="heading"><h3 class="headings">Follower</h3></div>
                        <div class="count">${followers}</div>
                    </div>
                    <div class="following">
                        <div class="heading"><h3 class="headings">Following</h3></div>
                        <div class="count">${following}</div>
                    </div>
                    <div class="repo">
                        <div class="heading"><h3 class="headings">Repo</h3></div>
                        <div class="count">${public_repos}</div>
                    </div>
                </div>
                <div class="bottomright">
                    <button class="btn"><a href="https://github.com/${user.value}">view profile</a></button>
                </div>
            </div>
        `
}



