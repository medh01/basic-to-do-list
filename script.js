// variables 

var myBtn=document.querySelector(".input button");
var myList=document.querySelector("ul");
var myInput=document.querySelector("input");


myBtn.addEventListener("click",()=>{
        
        var input=myInput.value;
        var myItem=document.createElement("li");
        myItem.innerHTML= input;
        myList.appendChild(myItem);
        myList.innerHTML+=`<i class="fa-solid fa-square-check done"></i><i class="fa-solid fa-trash delete"></i>`;
        var myDone=document.querySelectorAll(".done");
        var myDelete=document.querySelectorAll(".delete");
        var listItem=document.querySelectorAll("li");

        for(var i=0;i<listItem.length;i++){
            myDone[i].addEventListener("click",()=>{
                listItem[i].style.textDecoration="line-through";
            })
            myDelete[i].addEventListener("click",()=>{
                listItem[i].remove();
                myDone[i].remove();
                myDelete[i].remove();  
            })
        }
})