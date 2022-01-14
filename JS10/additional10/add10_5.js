// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let izobrajeniya = [
    "https://images.unsplash.com/photo-1637297440982-7db154d85270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    "https://images.unsplash.com/photo-1637308596840-d5f2a3a3d6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    "https://images.unsplash.com/photo-1636465056989-8e6862d8d444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80"
];
let images = [];

let carouselDiv = document.createElement("div");
carouselDiv.style.cssText = 
`
    height: 300px;
    min-height: 300px;
    display:flex;
    justify-content: center;
    align-items : center;
    position: relative;
    overflow: hidden;
    transition : 0.3s;
`;
document.body.append(carouselDiv);
let prev = document.createElement("div");
let next = document.createElement("div");
prev.innerText = "PREV";
next.innerText = "NEXT";
let naStile = 
`
position: absolute;
top: 50%;
border-radius: 50%;
width: 50px;
height: 50px;
border: 1px solid black;
transition: 0.3s;
background-color: yellowgreen;
font-size: 13px;
font-weight: 600;
transform : translateY(-50%);
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
user-select:none;
z-index:99999;
`;

prev.style.cssText = naStile;
prev.style.cssText += "left:0";
next.style.cssText = naStile;
next.style.cssText += "right:0";

prev.onmouseover = () => {prev.style.backgroundColor = "lightgreen"};
prev.onmouseout = () => {prev.style.backgroundColor = "yellowgreen"};
next.onmouseover = () => {next.style.backgroundColor = "lightgreen"};
next.onmouseout = () => {next.style.backgroundColor = "yellowgreen"};

carouselDiv.append(prev,next)



for(let i = 0; i<izobrajeniya.length;i++){
    let img = document.createElement("img");
    img.setAttribute("src",izobrajeniya[i]);
    img.style.width = "2000px";
    img.style.height = "1000px";
    img.style.opacity = "0"
    if(i===izobrajeniya.length-1){
        img.style.height = "700px";
        img.style.width = "1300px";
        img.style.opacity = "1";
    }
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    img.style.position = "absolute";
    img.style.transition = "0.5s"
    images.push(img);
    carouselDiv.style.height = `${img.style.height}`;
}
for(let i = 0; i < images.length ; i++){
    carouselDiv.append(images[i]);
}
let z = 0
prev.onclick = () => {          
    for(let i = 0 ; i<images.length ; i++){
        images[i].style.opacity = "0";
    }
    images[z].style.opacity = "1";
    carouselDiv.style.height = `${images[z].style.height}`;
    z--;
    if (z===-1){
        z = images.length-1;
    }
};
next.onclick = () => {
    for(let i = 0 ; i<images.length ; i++){
        images[i].style.opacity = "0";
    }
    images[z].style.opacity = "1";
    carouselDiv.style.height = `${images[z].style.height}`;
    z++;
    if (z===images.length){
        z = 0;
    }
};