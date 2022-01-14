// dlazapuska funkcii najmite ENTER 
// dla otklucheniya funkcii najmite chtoto krome ENTER

function one(){
    document.onclick = function(e){
        console.clear();
        e.preventDefault();
        function checkClassList(el){
            if (el.classList.length) {
                let arr = [];
                for (const key in el.classList) {
                    if (Object.hasOwnProperty.call(el.classList, key)) {
                        const element = el.classList[key];
                        arr.push(element);
                    }
                }
                console.log("Class list :",arr.join(", "));
            } else console.log("Class list : This list is empty");
        }
        function checkIdList(el){
            console.log("Id list:",el.attributes.id ? el.attributes.id.value.split(" ").join(",") : "This list is empty ");
        }
        console.log("Tag is :",`<${e.target.tagName.toLowerCase()}>`);
        checkClassList(e.target);
        checkIdList(e.target);
        console.log("Height*Width",e.target.offsetHeight + "*" + e.target.offsetWidth);
    }
}
function two (){
    document.onclick = function(){
        return true;
    }
}
document.onkeyup = function(e){
    if(e.key === "Enter") one();
    else two();
}