// variables 

var myBtn=document.querySelector(".input button");
var myList=document.querySelector("ul");
var myInput=document.querySelector("input");


myBtn.addEventListener("click",()=>{
    var input=myInput.value;
    
        var myItem=document.createElement("li");
        myItem.innerHTML= input + `<div class="buttons"><button class="done">done</button><button class="delete">delete</button></div>`;
        myList.appendChild(myItem);
        var myDone=myItem.querySelector(".done");
        myDone.addEventListener("click",()=>{
            if (myItem.style.textDecoration!="line-through"){
                myItem.style.textDecoration="line-through";
            }else{
                myItem.style.textDecoration="none"
            }
        })
        var myDelete=myItem.querySelector(".delete");
        myDelete.addEventListener("click",()=>{
            myItem.remove();
        })



})