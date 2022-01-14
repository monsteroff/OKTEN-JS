let userKey = "userKey"

let usersDiv = document.createElement("div");
usersDiv.classList.add("usersDiv");

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(users => {
    users.forEach(user => {
        let userDiv = document.createElement("div");
        userDiv.classList.add("userDiv");
        
        let userId = document.createElement("h2");
        let userName = document.createElement("h2");
        userId.classList.add("userId");
        userName.classList.add("userName");

        userId.innerText = "User id : " + user.id;
        userName.innerText = "User name : " + user.name;

        let userButton = document.createElement("div");
        let userAnchor = document.createElement("a");

        userButton.classList.add("userButton");
        userAnchor.classList.add("userAnchor");

        userAnchor.innerText = "DETAILS";
        
        userButton.onclick = () => {
            localStorage.setItem(userKey, JSON.stringify(user));
            userAnchor.setAttribute("href","./user-details.html");
            userAnchor.click();
        }

        userButton.append(userAnchor);
        
        userDiv.append(userId,userName,userButton);
        usersDiv.append(userDiv);
    });
});

document.body.insertBefore(usersDiv,document.body.getElementsByTagName("script")[0]);