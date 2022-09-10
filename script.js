const ulList = document.querySelector("#list");
function onAddClick(){
    let text = document.querySelector("#text").value;

    ulList.innerHTML += '<li class="elem">' + text + '<button onclick="parentElement.remove()" style="margin-left: 10px">Mark as done</button></li>';
}
function onClearClick(){
    ulList.innerHTML = "";
}