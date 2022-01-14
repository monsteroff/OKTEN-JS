let userKey = "userKey";
let postKey = "postKey";
let user = JSON.parse(localStorage.getItem(userKey));

let userInfoContainer = document.createElement("div");
userInfoContainer.classList.add("userInfoContainer");

function rec(object, addTo = userInfoContainer){
    let ul = document.createElement("ul");
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            addTo.append(ul);
            if(typeof element === "object"){
                let li = document.createElement("li");
                ul.append(li);
                rec(element,li);
            } else {
                let li = document.createElement("li");
                let h4 = document.createElement("h4");
                ul.append(li);
                li.append(h4);
                // h4.innerText = key.toUpperCase() + " " + element;
                h4.innerText = `${key.charAt(0).toUpperCase()}${key.slice(1,key.length)} : ${element}`;
            }
        }
    }
}
rec(user);

let userPostsButton = document.createElement("button");
let userPostsDiv = document.createElement("div");
userPostsButton.classList.add("userPostsButton");
userPostsDiv.classList.add("userPostsDiv");

userPostsButton.innerText = `Show posts of ${user.name}`;
userPostsButton.onclick = () => {
    if(!userPostsButton.classList.contains("show")){
        userPostsButton.classList.add("show");
        userPostsDiv.classList.add("show");
        userPostsButton.innerText = `Hide posts of ${user.name}`;
        showPosts();
    } else{
        userPostsButton.classList.remove("show");
        userPostsDiv.classList.remove("show");
        userPostsButton.innerText = `Show posts of ${user.name}`;
        // userPostsDiv.innerHTML = "";
        let i = userPostsDiv.children.length-1;
        let inter = setInterval(()=>{
            let a = userPostsDiv.children[i];
            a.remove();
            if(i===0) clearInterval(inter);
            i--;
        },70)
    }
}

function showPosts(){
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(res => res.json()).then(posts => {
        posts.forEach(post => {
            let userPostDiv = document.createElement("div");
            userPostDiv.classList.add("userPostDiv");

            let userPostTitle = document.createElement("h3");
            let userPostDetailsButton = document.createElement("div");
            let userPostDetailsAnchor = document.createElement("a");
            
            userPostTitle.classList.add("userPostTitle");
            userPostDetailsButton.classList.add("userPostDetailsButton");
            userPostDetailsAnchor.classList.add("userPostDetailsAnchor");

            userPostTitle.innerText = post.title;
            userPostDetailsButton.append(userPostDetailsAnchor);
            userPostDetailsAnchor.innerText = "Show this post"

            userPostDetailsButton.onclick = () => {
                localStorage.setItem(postKey,JSON.stringify(post));
                userPostDetailsAnchor.setAttribute("href","./post-details.html");
                userPostDetailsAnchor.click();
            }
            userPostDiv.append(userPostTitle,userPostDetailsButton);
            userPostsDiv.append(userPostDiv);
        });
    });
}

userInfoContainer.append(userPostsButton,userPostsDiv);
document.body.insertBefore(userInfoContainer,document.body.getElementsByTagName("script")[0]);