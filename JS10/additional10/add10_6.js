// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

//====================================================================================================

// let addRule = (function (style) {
//     let sheet = document.head.appendChild(style).sheet;
//     return function (selector, css) {
//         let propText = css;
//         sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
//     };
// })(document.createElement("style"));
// addRule("::selection", "background-color:red; color:white;");

//====================================================================================================

// document.onmouseup = () => {
    //     // Get Selection
    //     sel = window.getSelection();
    //     if (sel.rangeCount && sel.getRangeAt) {
        //       range = sel.getRangeAt(0);
        //     }
        //     // Set design mode to on
        //     document.designMode = "on";
        //     if (range) {
            //       sel.removeAllRanges();
            //       sel.addRange(range);
            //     }
            //     // Colorize text
            //     document.execCommand("ForeColor", false, "red");
            //     document.execCommand("FontSize", false, "40px");
            //     // Set design mode to off
            //     document.designMode = "off";
            // }
            
//====================================================================================================
            
function sel() {
    try {
        if (window.ActiveXObject) {
            let a = document.selection.createRange();
            return a.htmlText;
        }
        let span = document.createElement("span");
        let selectedText = getSelection().getRangeAt(0);

        // variant1 
        selectedText.surroundContents(span);
        // variant2
        // span.append(selectedText.extractContents());
        // selectedText.insertNode(span);
        
        return span.innerHTML;
    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}
document.onmouseup = () => {
    sel();
    if (document.querySelector("span")) {
        let spanList = document.querySelectorAll("span");
        spanList.forEach(s=>s.style.color = "red");
    }
    clearSelection();
}

//====================================================================================================

// document.onmouseup = () => {
//     if(window.getSelection){
//         let selection = window.getSelection();
//         console.log(selection.toString());
//         if(selection.getRangeAt(0)){
//             let selectedText = selection.getRangeAt(0);
//             let span = document.createElement("span");
//             span.style.color = "red";
//             span.append(selectedText.extractContents());
//             selectedText.insertNode(span);
//         }
//     }
//     clearSelection();
// }

//====================================================================================================

function clearSelection()
{
 if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}