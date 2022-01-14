// funkciya budet rabotat pri zajatom ALT i navodke mishi na element , eto interesnee chem prosto tikat na ekran ) 

document.body.style.overflowX = "hidden";
document.body.style.overflowY = "scroll";
let floateR = document.createElement("div");
floateR.style.display = "none";
floateR.style.minWidth = "240px";
floateR.style.padding = "15px";
floateR.style.backgroundColor = "black";
floateR.style.color = "white";
floateR.style.borderRadius = "5px";
floateR.style.position = "absolute";
floateR.style.zIndex = "99999";
document.addEventListener("mousemove", (e) => {   
    function checkClassList(el){
        if (el.classList.length) {
            let arr = [];
            for (const key in el.classList) {
                if (Object.hasOwnProperty.call(el.classList, key)) {
                    const element = el.classList[key];
                    arr.push(element);
                }
            }
            return (arr.join(", "));
        } else return ("This list is empty");
    }
    if (e.altKey) {
        document.addEventListener("mouseover", (e) => {
            if (e.altKey){
                e.target.style.boxShadow = `0 0 3px 500px red inset`;
            } else {
                e.target.style.boxShadow = `0 0 3px 3px transparent inset`;
            }
        });
        document.addEventListener("mouseout", (e) => e.target.style.boxShadow = `0 0 3px 3px transparent inset`);
        floateR.style.display = `block`;
        floateR.style.top = `${e.pageY + 20}px`;
        if (e.pageX + floateR.offsetWidth + 20 >= document.body.offsetWidth) {
            floateR.style.left = `auto`;
            floateR.style.right = `${(document.body.offsetWidth - e.pageX) + 20}px`;
        } else {
            floateR.style.left = `${e.pageX + 20}px`;
            floateR.style.right = `auto`;
        }
    } else floateR.style.display = "none";

    floateR.innerHTML = 
            `
            <h4>Tag is : ${e.target.tagName.toLowerCase()}</h4>
            <h4>Class List : ${checkClassList(e.target)}</h4>
            <h4>ID List : ${e.target.attributes.id ? e.target.attributes.id.value.split(" ").join(", ") : "This list is empty"}</h4>
            <h4>Height*Width : ${e.target.offsetHeight}*${e.target.offsetWidth}</h4>
            `
});
document.body.prepend(floateR);