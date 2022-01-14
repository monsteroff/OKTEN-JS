let userKey = "userKey";
let postKey = "postKey";

let user = JSON.parse(localStorage.getItem(userKey));
let post = JSON.parse(localStorage.getItem(postKey));

let postDiv = document.createElement("div");
postDiv.classList.add("postDiv");

let postUser = document.createElement("h1");
let postTitle = document.createElement("h2");
let postBody = document.createElement("p");
let postComments = document.createElement("div");

postUser.classList.add("postUser");
postTitle.classList.add("postTitle");
postBody.classList.add("postBody");
postComments.classList.add("postComments");

postUser.innerText = user.name;
postTitle.innerText = "Post title : " + post.title;
postBody.innerText = "Post : " + post.body;

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(res => res.json()).then(comments => {
    comments.forEach(comment => {
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("commentDiv");

        let commentWriter = document.createElement("h3");
        let commentBody = document.createElement("p");

        commentWriter.classList.add("commentWriter");
        commentBody.classList.add("commentBody");
        
        commentWriter.innerText = comment.email.split("@")[0].split("_").join(" ").split(".").join(" ");
        commentBody.innerText = "Comment : "+comment.body;

        commentDiv.append(commentWriter,commentBody);
        postComments.append(commentDiv)
    });
});

postDiv.append(postUser,postTitle,postBody,postComments);
document.body.insertBefore(postDiv,document.body.getElementsByTagName("script")[0]);