// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста



let taskDiv = document.createElement("div");
taskDiv.classList.add("taskDiv");
fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(arr => {
    arr.forEach(element => {
        let post = document.createElement("div");
        post.classList.add("post");

        let userId = document.createElement("h2");
        userId.classList.add("userId");
        userId.innerText = `USER ${element.userId}`;
        
        let postId = document.createElement("h2");
        postId.classList.add("postId");
        postId.innerHTML = `Post Id : ${element.id}`;

        let postTitle = document.createElement("h3");
        postTitle.classList.add("postTitle");
        postTitle.innerText = `post title : ${element.title}`;

        let postBody = document.createElement("h3");
        postBody.classList.add("postBody");
        postBody.innerText = element.body.split("\n").join(" ");

        let postButton = document.createElement("button");
        postButton.classList.add("postButton");
        postButton.innerText = `Show comments of this post`;

        let commentsDiv = document.createElement("div");
        commentsDiv.classList.add("commentsDiv");

        postButton.onclick = () => {
            if(postButton.classList.contains("show")){
                commentsDiv.innerHTML = "";
                postButton.classList.remove("show");
            } else {
                postButton.classList.add("show");
                fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}/comments`).then(res => res.json()).then(commentsArr => {
                    commentsArr.forEach(comment => {
                        let commentDiv = document.createElement("div");
                        commentDiv.classList.add("commentDiv");
                        let commentedUser = document.createElement("h4");
                        commentedUser.classList.add("commentedUser");
                        commentedUser.innerText = comment.email.split("@")[0].split("_").join(" ").split(".").join(" ");
                        let commentBody = document.createElement("h5");
                        commentBody.classList.add("commentBody");
                        commentBody.innerText = comment.body.split("\n").join(" ");
                        commentDiv.append(commentedUser,commentBody);
                        commentsDiv.append(commentDiv);
                    });
                });
            }
        };

        post.append(userId,postId,postTitle,postBody,postButton,commentsDiv);
        taskDiv.append(post);
    });
});
document.body.insertBefore(taskDiv,document.body.getElementsByTagName("script")[0]);