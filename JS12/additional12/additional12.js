// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let taskDiv = document.createElement("div");
taskDiv.classList.add("taskDiv");

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(users => {
    users.forEach(user => {
        let userDiv = document.createElement("div");
        userDiv.classList.add("userDiv");
        
        let userName = document.createElement("h3");
        userName.classList.add("userName");
        userName.innerText = user.name;

        console.log(user);
        let userInfo = document.createElement("h3");
        userInfo.classList.add("userInfo");
        userInfo.innerText = 
        `City : ${user.address.city}
        Company : ${user.company.name}
        Phone : ${user.phone}
        Website : ${user.website}`

        let userPostsDiv = document.createElement("div");
        userPostsDiv.classList.add("userPostsDiv");

        let userButton = document.createElement("button");
        userButton.classList.add("userButton");
        userButton.innerText = "Show posts";
        userButton.onclick = () => {
            if(!userButton.classList.contains("show")){
                userButton.classList.add("show");
                userPostsDiv.classList.add("show");
                userButton.innerText = "Hide posts";
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(res => res.json()).then(posts => {
                    posts.forEach(post => {
                        let postDiv = document.createElement("div");
                        postDiv.classList.add("postDiv");

                        let postTitle = document.createElement("h3");
                        postTitle.classList.add("postTitle");
                        postTitle.innerText ="post title : " + post.title;

                        let postBody = document.createElement("h3");
                        postBody.classList.add("postBody");
                        postBody.innerText = "post body : " + post.body.split("\n").join(" ");

                        let postComments = document.createElement("div");
                        postComments.classList.add("postComments");

                        let postButton = document.createElement("button");
                        postButton.classList.add("postButton");
                        postButton.innerText = "Show comments";
                        postButton.onclick = () => {
                            if(!postButton.classList.contains("show")){
                                postButton.classList.add("show");
                                postComments.classList.add("show");
                                postButton.innerText = "Hide comments";
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(res => res.json()).then(comments => {
                                    comments.forEach(comment => {

                                        let commentDiv = document.createElement("div");
                                        commentDiv.classList.add("commentDiv");

                                        let commentWriter = document.createElement("h4");
                                        commentWriter.classList.add("commentWriter");
                                        commentWriter.innerText = comment.email.split("@")[0].split("_").join(" ").split(".").join(" ");
                                        
                                        let commentBody = document.createElement("h4");
                                        commentBody.classList.add("commentBody");
                                        commentBody.innerText = comment.body.split("\n").join(" ");
                                        
                                        commentDiv.append(commentWriter,commentBody);
                                        postComments.append(commentDiv);
                                    });
                                });
                            } else{
                                postButton.classList.remove("show");
                                postComments.classList.remove("show");
                                postButton.innerText = "Show comments";
                                postComments.innerHTML = "";
                            }
                        };

                        postDiv.append(postTitle,postBody,postButton,postComments);
                        userPostsDiv.append(postDiv);
                    });
                });
            } else{
                userButton.classList.remove("show");
                userPostsDiv.classList.remove("show");
                userButton.innerText = "Show posts";
                userPostsDiv.innerHTML = "";
            }
        };

        userDiv.append(userName,userInfo,userButton,userPostsDiv);
        taskDiv.append(userDiv);
    });
})
document.body.insertBefore(taskDiv,document.body.getElementsByTagName("script")[0])