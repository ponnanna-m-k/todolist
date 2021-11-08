//adding task
function additem(){
    var inp= document.createElement("li");
    var inputValue = document.getElementById("text1").value;
    var t = document.createTextNode(inputValue);
    inp.appendChild(t);
    if (inputValue === '') {
     alert("You must write something..!");
   } else {
     document.getElementById("lists").appendChild(inp);
   }
   document.getElementById("text1").value = "";
   document.getElementById("text1").value = "";
 
 //Creation of completed button
    const btn1 = document.createElement("button");
    btn1.innerHTML='DONE <i class="fa fa-check"></i>';
    btn1.style.backgroundColor = "white";
    btn1.style.borderStyle = "none";
    btn1.style.paddingLeft = "2em";
    btn1.style.cssFloat = "right";
    btn1.style.fontSize = "15px";
    btn1.style.paddingTop = "3px";
    btn1.classList.add("done");
    inp.appendChild(btn1);



 //Creation of delete button
    let btn2 = document.createElement("delete");
    btn2.innerHTML='DELETE <i class="fa fa-trash "></i>';
    btn2.style.fontSize = "15px";
    btn2.style.paddingTop = "3px";
    btn2.classList.add("trash");
    inp.appendChild(btn2);
 }


 //fuction for delete and completed
 const todoList = document.querySelector('.tolist');
 todoList.addEventListener("click", deleteCheck);
 

 function deleteCheck(e) {
     const item = e.target;
    //DELETE ITEM
     if (item.classList[0] === "trash") {
         const todo = item.parentElement;
        todo.classList.add("fall");
         
      }
    // COMPLETE ITEM
     if (item.classList[0] === "done") {
         const todo = item.parentElement;
         todo.classList.toggle("completedItem")
     }
 }
