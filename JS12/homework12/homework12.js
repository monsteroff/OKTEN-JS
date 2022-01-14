// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, 
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let task1Div = document.createElement("div");
task1Div.classList.add("task1Div");
fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(arr => {
    arr.forEach(element => {
        let post = document.createElement("div");
        let postTitle = document.createElement("h3");
        let postBody = document.createElement("h4");
        post.classList.add("post");
        postTitle.classList.add("postTitle");
        postBody.classList.add("postBody");
        post.append(postTitle,postBody);
        postTitle.innerText = element.title;
        postBody.innerText = element.body.split("\n").join(" ");
        task1Div.append(post);
    });
});
document.body.insertBefore(task1Div,document.body.getElementsByTagName("script")[0]);

// 2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let task2Div = document.createElement("div");
task2Div.classList.add("task2Div");
fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()).then(arr => {
    arr.forEach(element => {
        let comment = document.createElement("div");
        let commentIdAndName = document.createElement("h3");
        let commentEmail = document.createElement("h4");
        let commentBody = document.createElement("h4");

        comment.classList.add("comment");
        commentIdAndName.classList.add("commentIdAndName");
        commentEmail.classList.add("commentEmail");
        commentBody.classList.add("commentBody");

        comment.append(commentIdAndName,commentEmail,commentBody);

        commentIdAndName.innerText = element.id + ". " + element.name;
        commentEmail.innerHTML = element.email;
        commentBody.innerText = element.body.split("\n").join(" ");

        task2Div.append(comment);
    });
});
document.body.insertBefore(task2Div,document.body.getElementsByTagName("script")[0]);