/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","p","p","ul","li","li","li","li","ul","body","html"];
let stack = [];

// Ziel --> "<html><head></head><body><p></p></body></html>"; 
 


 
//  // Aufgabe: Das ganze in einer Spalte, also richtig anzeigen lassen.


function getTag(tag,flag) {
    switch (flag) {
        case "open":
            // return controls[0] + tag + controls[2] + "\n";
            return getTab(stack.length - 1) + controls[0] + tag + controls[2] + "\n";
        case "close":
            // return controls[1] + tag + controls[2] + "\n";
            return getTab(stack.length) + controls[1] + tag + controls[2] + "\n";
        default:
            return "#!?";
    }
}

function getTab(tabCount) {

    let myTab ="";
    for (let index = 0; index < tabCount; index++) {

        myTab += "\t";
    }
    return myTab;
}


// //


// Modul: HTML-String erzeugen | Test

output(getHTML());
function getHTML(){

    let htmlStr = "";
    

    for (let i = 0; i < tags.length; i++){
        if (isOpenTag(tags[i])) {
            htmlStr += getTag(tags[i], "open");
        } else {
            htmlStr += getTag(tags[i], "close");
        }
    }
    
    return htmlStr;

	
}


// Modul: zusammenbau isOpenTag / ist es open oder close

// output(isOpenTag("html"))
// output(isOpenTag("head"))
// output(isOpenTag("head"))
function isOpenTag(tag){

    const cond = (stack.indexOf(tag) == -1);        // tag ist neu

    if (cond){
        stack.push(tag);
        output(stack);
        return true;
    } else {
        stack.pop();
        output(stack);
        return false;
    }

}
    
    
    

// Modul: zusammenbau: <tagStr> --> Tests:

// output(getTag("p", "open"));
// output(getTag("p", "close"));
// output(getTag("p", "irgendwas"));

// function getTag(tag, flag){
//     switch (flag){
//         case "open":
//             return controls[0] + tag + controls[2];
//         case "close":
//             return  controls[1] + tag + controls[2];
//         default:
//             return "#!?"
//     }
// }



// Modul: Ausgabe | Test
//ausgabe("hi");

function output(outputStr) {
    console.log(outputStr);
   

}

