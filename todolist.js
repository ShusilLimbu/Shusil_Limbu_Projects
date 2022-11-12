

//creating a close button and append it to each list item

var liList=document.getElementsByTagName("li");
var i;
for(i=0;i<liList.length;i++){

    let txt=document.createTextNode("\u00D7");
    let span=document.createElement("span");
    span.className="close";
    span.appendaChild(txt);
    liList[i].appendChild(span);


}

//click on list to hide list item

var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){

    close[i].onclick=()=>{
        var div=this.parentElement;
        div.style.display="none";
    }
}

//add a checked symbol when clicking on a list item

var list=document.getElementById("ulItem");
list.addEventListener("click",(ev)=>{
    if(ev.target.tagName==="li"){
        ev.target.classlist.toggle("checked");
    }
},false);


function newElement(){
var li=document.createElement("li");
var inVal=document.getElementById("inputL").value;
var txt= document.createTextNode(inVal);
li.appendChild(txt);
document.getElementByClassName("ulItem").appendChild(li);
var t=createTextNode("\u00D7");
var span=createElement("span");
span.className="close";
span.appendChild(t);
li.appendChild(span);

for(i=0;i<close.length;i++){
    close[i].onclick=()=>{
        let div=this.parentElement;
        div.style.display="none";
        }

}
}