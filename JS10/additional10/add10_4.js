// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, 
// при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента 
// и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let prev = document.createElement("button");
let next = document.createElement("button");
let naStile = 
`
position: absolute;
top: 10px;
border-radius: 50%;
width: 50px;
height: 50px;
border: 1px solid black;
transition: 0.3s;
background-color: yellowgreen;
font-size: 13px;
font-weight: 600;
`;
prev.innerText = "PREV";
prev.style.cssText = naStile;
prev.style.right += "70px";
next.innerText = "NEXT";
next.style.cssText = naStile;
next.style.right += "10px";
document.body.append(prev,next);

let prevBgColor = window.getComputedStyle(prev,null).getPropertyValue("background-color");
let nextBgColor = window.getComputedStyle(next,null).getPropertyValue("background-color");
prev.onmouseover = () => {prev.style.backgroundColor = "lightgreen"};
prev.onmouseout = () => {prev.style.backgroundColor = prevBgColor};
next.onmouseover = () => {next.style.backgroundColor = "lightgreen"};
next.onmouseout = () => {next.style.backgroundColor = nextBgColor};

let elementsArr = [];
function rec(elements){
    for (const element of elements) {
        elementsArr.push(element);
        if (element.children.length) rec(element.children);
    }
}
rec(document.body.children);

let z = 0;
prev.onclick = () => {
    if (z>0) z--;
    console.log(elementsArr[z]);
    console.log(z);
    elementsArr[z].style.boxShadow = `0 0 3px 500px crimson inset`;
    elementsArr[z+1].style.boxShadow = `0 0 0 0 transparent inset`;
    if (z === 0) elementsArr[z].style.boxShadow = `0 0 0 0 transparent inset`;
}
next.onclick = () => {
    if (z<(elementsArr.length-1)) z++;
    console.log(elementsArr[z]);
    console.log(z);
    elementsArr[z].style.boxShadow = `0 0 3px 500px crimson inset`;
    elementsArr[z-1].style.boxShadow = `0 0 0 0 transparent inset`;
}