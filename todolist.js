let form=document.getElementById("addForm")
// console.log(form);
let itemlist=document.getElementById("items");
// console.log(itemlist);
let filter=document.getElementById("filter");
// console.log(filter);

function addItem(e){
    e.preventDefault();
    // console.log(e);
    let newItem=document.getElementById("item").value;
    // console.log(newItem);
    if(newItem==""){
        alert("Please enter a valid task");
        return;
    }
    let li=document.createElement("li")
    // console.log(li);
    li.className="list-group-item";
    let node=document.createTextNode(newItem);
    li.appendChild(node);

    let btn=document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    btn.className="btn btn-danger btn-sm float-right delete";
    li.appendChild(btn);

    // console.log(li);
    let list=document.getElementById("items");
    list.appendChild(li);
    document.getElementById("item").value="";
}

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure you want to delete this item ?")){
            console.log(e.target.parentElement);          //listitem is parent of button X so to delete a listitem u need to target the parent
            itemlist.removeChild(e.target.parentElement); //removeChild is an inbuilt function
        }
        else{
            alert("u kidding?")
        }
    }
    else{
        alert("Click on the X button to save changes");
    }
}

function filterItem(e){
    let text=e.target.value.toLowerCase();
    let items=itemlist.getElementsByTagName("li");
    // console.log(items);
    let itemsArray=Array.from(items);
    // console.log(itemsArray);
    itemsArray.forEach(function(value){
        let itemName=value.firstChild.textContent;
        console.log(itemName.toLowerCase().indexOf(text));
        if(itemName.toLowerCase().indexOf(text)!=-1){
            value.style.display="block";
        }
        else{
            value.style.display="none";
        }
    })
}

form.addEventListener("submit",addItem);
itemlist.addEventListener("click",removeItem);
filter.addEventListener("keyup",filterItem);
