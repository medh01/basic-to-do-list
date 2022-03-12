// variables 

var myBtn=document.querySelector(".input button");
var myList=document.querySelector("ul");
var myInput=document.querySelector("input");


myBtn.addEventListener("click",()=>{
    var input=myInput.value;
    
        var myItem=document.createElement("li");
        myItem.innerHTML= input + `<button class="done">done</button><button class="delete">delete</button>`;
        myList.appendChild(myItem);
        var myDone=myItem.querySelector(".done");
        myDone.addEventListener("click",()=>{
            myItem.style.textDecoration="line-through";
        })
        var myDelete=myItem.querySelector(".delete");
        myDelete.addEventListener("click",()=>{
            myItem.remove();
        })



})