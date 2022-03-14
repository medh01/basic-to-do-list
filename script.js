// variables 

var myBtn=document.querySelector(".input button");
var myList=document.querySelector("ul");
var myInput=document.querySelector("input");

function f(){
    var myInputValue=myInput.value;
    if(myInputValue){
        myInput.value="";
        var myItem=document.createElement("li");
        var myText=document.createElement("p");
        var myDelete=document.createElement("i")
        var myDone=document.createElement("i");
        myText.innerText=myInputValue;
        myDelete.setAttribute("class","fa-solid fa-trash delete");
        myDone.setAttribute("class","fa-solid fa-square-check done");
        myItem.appendChild(myText);
        myItem.appendChild(myDone);
        myItem.appendChild(myDelete);
        myList.appendChild(myItem);
     
        myDone.addEventListener("click",()=>{
            myText.style.textDecoration="line-through";
        })
     
        myDelete.addEventListener("click",()=>{
         myItem.remove();
     })
    }
}

myBtn.addEventListener("click",()=>{
  f();

})

myInput.addEventListener("keydown",(e)=>{
    if(e.keyCode===13){
        f();
    }
})